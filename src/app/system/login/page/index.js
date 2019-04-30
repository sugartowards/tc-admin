import React from "react";
import {TopMenuIndexPage} from "CtnUi";
import {SysMenu} from "../../../../config/sysTables";
import "../css/index.css";

export default class Index extends TopMenuIndexPage {

    constructor(props, context) {
        super(props, context);
        this.userInfo && (this.app = `${context.urlPath.pmsn.userPmsn}/${this.userInfo.id}`);
        this.loginApp = context.urlPath.pmsn.login;
        this.logoutApp = context.urlPath.pmsn.logout;
        this.title = 'CtnFrame-Admin';
        this.appMap = props.appMap;
    }

    /**
     * 递归处理菜单
     * 1.将隐藏的菜单去掉
     * 2.将菜单下面是按钮的结构调整
     * @param menuData
     * @returns {Array}
     * @private
     */
    handleLoginData(menuData) {
        let newMenuData = [];
        menuData.forEach(menu => {
            if (menu[SysMenu.FLD_TYPE] == SysMenu.FLDVAL_TYPE_CD) {
                let children = menu.children || [];
                if (children.length && children[0][SysMenu.FLD_TYPE] == SysMenu.FLDVAL_TYPE_AN) {
                    delete menu.children;
                    menu.buttons = this.handleLoginData(children);
                } else if (children.length) {
                    menu.children = this.handleLoginData(children);
                }
            } else {
                menu = {
                    text: menu[SysMenu.FLD_TITLE],
                    buttonType: menu[SysMenu.FLD_BUTTON_TYPE],
                    type: menu[SysMenu.FLD_BUTTON_SHOW_TYPE],
                    [SysMenu.FLD_VISIBLE]: menu[SysMenu.FLD_VISIBLE],
                    [SysMenu.FLD_CLICK]: menu[SysMenu.FLD_CLICK],
                    [SysMenu.FLD_ICON]: menu[SysMenu.FLD_ICON],
                };
            }
            if (menu[SysMenu.FLD_URL]) {
                this.menuAttributeMap[menu[SysMenu.FLD_URL]] = {
                    menu: menu,
                    buttons: menu.buttons,
                };
                delete menu.buttons;
            }
            if (menu[SysMenu.FLD_VISIBLE] == SysMenu.FLDVAL_VISIBLE_XS) {
                newMenuData.push(menu);
            }
        });
        return newMenuData;
    }

    /**
     * 显示用户信息Tab页
     */
    showUserInfo = ()=> {
        this.addTab({
            title: '个人信息',
            url: 'system/login/userInfo',
        });
    };
}