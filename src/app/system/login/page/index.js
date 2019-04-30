import React from "react";
import {TopMenuIndexPage} from "CtnUi";
import {SysMenu} from "../../../../config/sysTables";
import "../css/index.css";

export default class Index extends TopMenuIndexPage {

    constructor(props, context) {
        localStorage.setItem(TopMenuIndexPage._UserInfo, {
            username: 'Admin',
            password: '123456',
        });
        super(props, context);
        this.userInfo && (this.app = `${context.urlPath.pmsn.userPmsn}/${this.userInfo.id}`);
        this.loginApp = context.urlPath.pmsn.login;
        this.logoutApp = context.urlPath.pmsn.logout;
        this.title = 'Tc-Admin';
        this.appMap = props.appMap;
    }

    componentDidMount() {
        this.setState({menuData: this.handleLoginData(null)});
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
        return [
            {
                "typeval": "菜单",
                "disp_order": 1,
                "visibleval": "显示",
                "visible": 1,
                "menu_type": 1,
                "children": [{
                    "typeval": "菜单",
                    "disp_order": 1,
                    "visibleval": "显示",
                    "visible": 1,
                    "icon": "pie-chart",
                    "id": 501,
                    "super_id": 5,
                    "title": "分析页",
                    "type": 1,
                    "level_type": 2,
                    "url": "system/dashboard/analysisPage"
                }, {
                    "typeval": "菜单",
                    "disp_order": 2,
                    "visibleval": "显示",
                    "visible": 1,
                    "icon": "bar-chart",
                    "id": 502,
                    "super_id": 5,
                    "title": "工作台",
                    "type": 1,
                    "level_type": 2,
                    "url": "system/dashboard/workPlace"
                }],
                "icon": "hourglass",
                "id": 5,
                "title": "dashboard",
                "type": 1,
                "level_type": 1,
                "menu_typeval": "ManagePage"
            }, {
                "typeval": "菜单",
                "disp_order": 5,
                "visibleval": "显示",
                "visible": 1,
                "menu_type": 1,
                "children": [{
                    "typeval": "菜单",
                    "disp_order": 2,
                    "visibleval": "显示",
                    "visible": 1,
                    "children": [{
                        "typeval": "菜单",
                        "disp_order": 1,
                        "visible": 1,
                        "menu_type": 1,
                        "icon": "team",
                        "title": "用户管理",
                        "type": 1,
                        "level_type": 3,
                        "menu_typeval": "ManagePage",
                        "url": "system/permision/userManage",
                        "visibleval": "显示",
                        "id": 20201,
                        "super_id": 202
                    }, {
                        "typeval": "菜单",
                        "disp_order": 2,
                        "visible": 1,
                        "menu_type": 1,
                        "icon": "idcard",
                        "title": "部门管理",
                        "type": 1,
                        "level_type": 3,
                        "menu_typeval": "ManagePage",
                        "url": "system/permision/deptManage",
                        "visibleval": "显示",
                        "id": 20202,
                        "super_id": 202
                    }, {
                        "typeval": "菜单",
                        "disp_order": 3,
                        "visible": 1,
                        "menu_type": 1,
                        "icon": "trademark",
                        "title": "角色管理",
                        "type": 1,
                        "level_type": 3,
                        "menu_typeval": "ManagePage",
                        "url": "system/permision/roleManage",
                        "visibleval": "显示",
                        "id": 20203,
                        "super_id": 202
                    }, {
                        "typeval": "菜单",
                        "disp_order": 4,
                        "visible": 1,
                        "menu_type": 1,
                        "icon": "contacts",
                        "title": "权限分配",
                        "type": 1,
                        "level_type": 3,
                        "menu_typeval": "ManagePage",
                        "url": "system/permision/rolePermission",
                        "visibleval": "显示",
                        "id": 20204,
                        "super_id": 202
                    }],
                    "icon": "lock",
                    "id": 202,
                    "super_id": 2,
                    "title": "权限管理",
                    "type": 1,
                    "level_type": 2
                }, {
                    "typeval": "菜单",
                    "disp_order": 4,
                    "visibleval": "显示",
                    "visible": 1,
                    "children": [{
                        "typeval": "菜单",
                        "disp_order": 1,
                        "visible": 1,
                        "menu_type": 1,
                        "icon": "addfile",
                        "title": "操作日志",
                        "type": 1,
                        "level_type": 3,
                        "menu_typeval": "ManagePage",
                        "url": "system/log/opertionLog",
                        "visibleval": "显示",
                        "id": 20401,
                        "super_id": 204
                    }, {
                        "typeval": "菜单",
                        "disp_order": 2,
                        "visible": 1,
                        "menu_type": 1,
                        "icon": "addfolder",
                        "title": "系统日志",
                        "type": 1,
                        "level_type": 3,
                        "menu_typeval": "ManagePage",
                        "url": "system/log/requestLog",
                        "visibleval": "显示",
                        "id": 20402,
                        "super_id": 204
                    }],
                    "icon": "hdd",
                    "id": 204,
                    "super_id": 2,
                    "title": "日志管理",
                    "type": 1,
                    "level_type": 2
                }],
                "icon": "setting",
                "id": 2,
                "title": "系统管理",
                "type": 1,
                "level_type": 1,
                "menu_typeval": "ManagePage"
            }, {
                "typeval": "菜单",
                "disp_order": 9,
                "visibleval": "显示",
                "visible": 1,
                "menu_type": 1,
                "children": [{
                    "typeval": "菜单",
                    "disp_order": 1,
                    "visible": 1,
                    "menu_type": 1,
                    "icon": "switcher",
                    "title": "菜单管理",
                    "type": 1,
                    "level_type": 2,
                    "menu_typeval": "ManagePage",
                    "url": "admin/menu/menuManage",
                    "visibleval": "显示",
                    "id": 901,
                    "super_id": 9
                }, {
                    "typeval": "菜单",
                    "disp_order": 2,
                    "visible": 1,
                    "menu_type": 1,
                    "icon": "database",
                    "title": "系统表管理",
                    "type": 1,
                    "level_type": 2,
                    "menu_typeval": "ManagePage",
                    "url": "admin/system/tablesManage",
                    "visibleval": "显示",
                    "id": 902,
                    "super_id": 9
                }, {
                    "typeval": "菜单",
                    "disp_order": 3,
                    "visible": 1,
                    "menu_type": 1,
                    "icon": "select",
                    "title": "URL管理",
                    "type": 1,
                    "level_type": 2,
                    "menu_typeval": "ManagePage",
                    "url": "admin/config/urlManage",
                    "visibleval": "显示",
                    "id": 903,
                    "super_id": 9
                }, {
                    "typeval": "菜单",
                    "disp_order": 4,
                    "visible": 1,
                    "menu_type": 1,
                    "icon": "disconnect",
                    "title": "ICON展示",
                    "type": 1,
                    "level_type": 2,
                    "menu_typeval": "ManagePage",
                    "url": "admin/config/iconShowPage",
                    "visibleval": "显示",
                    "id": 904,
                    "super_id": 9
                }],
                "icon": "key",
                "id": 9,
                "title": "后台管理",
                "type": 1,
                "level_type": 1,
                "menu_typeval": "ManagePage"
            }];
        // let newMenuData = [];
        // menuData.forEach(menu => {
        //     if (menu[SysMenu.FLD_TYPE] == SysMenu.FLDVAL_TYPE_CD) {
        //         let children = menu.children || [];
        //         if (children.length && children[0][SysMenu.FLD_TYPE] == SysMenu.FLDVAL_TYPE_AN) {
        //             delete menu.children;
        //             menu.buttons = this.handleLoginData(children);
        //         } else if (children.length) {
        //             menu.children = this.handleLoginData(children);
        //         }
        //     } else {
        //         menu = {
        //             text: menu[SysMenu.FLD_TITLE],
        //             buttonType: menu[SysMenu.FLD_BUTTON_TYPE],
        //             type: menu[SysMenu.FLD_BUTTON_SHOW_TYPE],
        //             [SysMenu.FLD_VISIBLE]: menu[SysMenu.FLD_VISIBLE],
        //             [SysMenu.FLD_CLICK]: menu[SysMenu.FLD_CLICK],
        //             [SysMenu.FLD_ICON]: menu[SysMenu.FLD_ICON],
        //         };
        //     }
        //     if (menu[SysMenu.FLD_URL]) {
        //         this.menuAttributeMap[menu[SysMenu.FLD_URL]] = {
        //             menu: menu,
        //             buttons: menu.buttons,
        //         };
        //         delete menu.buttons;
        //     }
        //     if (menu[SysMenu.FLD_VISIBLE] == SysMenu.FLDVAL_VISIBLE_XS) {
        //         newMenuData.push(menu);
        //     }
        // });
        // return newMenuData;
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