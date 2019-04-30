/**
 * Created by Suger on 2018/3/22.
 */
import {notification} from 'antd';
import FileSaver from 'file-saver';
import fetch from 'isomorphic-fetch';
import {ManagePage} from 'CtnUi';
import {FilePath} from '../../../../config/pathCfg';
import {SysMenu} from '../../../../config/sysTables';
import {Template, TemplateCfg} from '../config/menuManage';

export const TreeObj = 'treeObj';
export const FormObj = 'formObj';
const NextLineStr = '\r\n';//换行符号
export const MenuManageFunc = {

    /**
     * 新增菜单
     */
    addMenu: function () {
        let treeObj = this.refs[TreeObj];
        let checkedNodes = treeObj.getChecked(), parentNode = null;
        if (checkedNodes.length > 0) {
            parentNode = checkedNodes[checkedNodes.length - 1];
        } else {
            parentNode = {children: treeObj.getData()};
        }
        //计算id, super_id, level_type, disp_order，其他值默认
        let id = null, children = parentNode.children, type = SysMenu.FLDVAL_TYPE_CD;
        if (children && children.length) {
            id = parseInt(children[children.length - 1].id) + 1;
            type = children[0].type;
        } else {
            id = parentNode.id + '01';
        }
        let newNode = {
            id,
            type,
            title: type == SysMenu.FLDVAL_TYPE_CD ? '新增菜单' : '新增按钮',
            super_id: parentNode.id,
            level_type: parseInt(parentNode.level_type || 0) + 1,
            disp_order: children ? children.length + 1 : 1,
            url: undefined,
            click: undefined,
            icon: 'icon-cog',
            visible: SysMenu.FLDVAL_VISIBLE_XS,
        };
        treeObj.addNode(newNode, parentNode.key);
    },

    /**
     * 删除菜单
     */
    deleteMenu: function () {
        let treeObj = this.refs[TreeObj];
        treeObj.deleteNode(treeObj.getChecked());
    },

    /**
     * 导出APP配置
     */
    exportAppCfg: function () {
        let menuData = this.refs[TreeObj].getData(),
            codeStr = `import React from 'react';${NextLineStr}${NextLineStr}`;
        let appMap = {};
        MenuManageFunc._getByMenuCodeStr(menuData, appMap);
        codeStr += `export const AppMap = {${NextLineStr}`;
        for (let url in appMap) {
            codeStr += `    '${url}': ${appMap[url]},${NextLineStr}`;
        }
        codeStr += `};${NextLineStr}`;
        let files = [];
        files.push({path: `src/config`, fileName: `appCfg.js`, code: codeStr});
        if (files.length) {
            MenuManageFunc._writeFile.call(this, files);
        }
    },

    /**
     * 导出模版
     */
    exportPage: function () {
        let files = [];
        let menus = this.refs[TreeObj].getChecked();
        if (!menus.length) {
            notification.info({message: '友情提示：', description: '请勾选需要导出的菜单！'});
        }
        menus.forEach(menu => {
            if (menu.url) {
                let urlArr = menu.url.split("/");
                let appName = urlArr[0], pageName = urlArr[1];
                if (urlArr.length == 3) {
                    appName = urlArr[0] + '/' + urlArr[1];
                    pageName = urlArr[2];
                }
                let options = Object.assign({}, {
                    pageName,
                    pageNameUpper: pageName.charAt(0).toUpperCase() + pageName.substr(1),
                    dateStr: new Date().toLocaleDateString(),
                    tabName: 'SysMenu',
                    title: menu.title,
                });
                //处理模版
                let template = TemplateCfg[options.template] || ManagePage.name;
                files.push({
                    path: `src/app/${appName}/page`,
                    fileName: `${pageName}.js`,
                    code: Template[template](options)
                });
                //处理按钮
                let children = menu.children || [];
                if (children.length && children[0][SysMenu.FLD_TYPE] == SysMenu.FLDVAL_TYPE_AN) {
                    options.buttons = children;
                    files.push({
                        path: `src/app/${appName}/function`,
                        fileName: `${pageName}.js`,
                        code: Template[`${template}Func`](options)
                    });
                }
            }
        });
        if (files.length) {
            this.func._writeFile(files);
        }
    },

    /**
     * 导出菜单插入SQL
     */
    exportSql: function () {
        let menuData = this.refs[TreeObj].getData();
        let sql = `delete from \`${SysMenu.TAB_NAME}\`;\r\n` + MenuManageFunc._getSqlByMenu(menuData);
        let blob = new Blob([sql], {type: "text/plain;charset=utf-8"});
        let fileNameStr = new Date().toLocaleDateString() + '-main_menu.sql';
        FileSaver.saveAs(blob, fileNameStr);
    },

    /**
     * 菜单属性保存按钮的响应
     */
    onSave: function () {
        let value = this.refs[FormObj].getFieldsValue();
        this.refs[TreeObj].updateNode(value);
        notification.info({message: '友情提示：', description: '保存成功！'});
    },

    /**
     * 选中一个菜单
     * @param selectedKeys
     * @param node
     */
    menuSelect: function (selectedKeys, {node}) {
        let menu = {};
        if (node.props.children) {
            menu = node.props.dataRef.attribute;
        } else {
            menu = node.props.attribute;
        }
        this.refs[FormObj].resetFields();
        this.refs[FormObj].setFieldsValue(menu);
        this.setState({menu});
    },

    /**
     * 获取菜单导出的SQL语句
     * @param menuData
     * @param level
     * @returns {string}
     * @private
     */
    _getSqlByMenu: function (menuData, level = 0) {
        let sql = '';
        menuData.forEach(({attribute}) => {
            let {children, options} = attribute;
            delete attribute.children;
            delete attribute.options;
            for (let key in attribute) {
                //去掉Val（数据库中查询出来会存在）、数据为空
                if (key.lastIndexOf('val') > 0 || !attribute[key]) {
                    delete attribute[key];
                }
            }
            sql += `INSERT INTO \`${SysMenu.TAB_NAME}\` (\`${Object.keys(attribute).join('\`,\`')}\`)values ('${Object.values(attribute).join('\',\'')}');\r\n`;
            Object.assign(attribute, {children, options});
            if (children && children.length) {
                sql += MenuManageFunc._getSqlByMenu(children, level + 1);
            }
            if (level == 0) {
                sql += '\r\n';
            }
        });
        return sql;
    },

    /**
     * 根据菜单数据，转化为AppCfg文件的代码
     * @param menuData
     * @param appMap
     * @returns {string}
     * @private
     */
    _getByMenuCodeStr: function (menuData, appMap) {
        for (let menu of menuData) {
            if (menu.url && !appMap[menu.url]) {
                let urlPath = menu.url.split('/');
                let appName = urlPath[0], pageName = urlPath[1];
                if (urlPath.length == 3) {
                    appName = urlPath[0] + '/' + urlPath[1];
                    pageName = urlPath[2];
                }
                let uPageName = pageName;
                if (pageName) {
                    uPageName = pageName.charAt(0).toUpperCase() + pageName.substr(1);
                }
                if (pageName) {
                    appMap[menu.url] = `() => import(/* webpackChunkName: "${pageName}" */'../app/${appName}/page/${pageName}')`;
                }
            }
            if (menu.children) {
                MenuManageFunc._getByMenuCodeStr(menu.children, appMap);
            }
        }
    },

    /**
     *
     * 调用nodejs发布的FILE服务，将代码目录及文件写入到当前代码环境中
     * @param files [{path: 'src/app/user/page', fileName: 'userManage.js', code: '1234555'}]
     * @private
     */
    _writeFile: function (files) {
        fetch(`${FilePath}${this.context.urlPath.config.exportTemplate}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({files}),
            mode: 'cors',
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then(({state, message})=> {
            if (state) {
                notification.success({message: '友情提示：', description: '导出成功！'});
            } else {
                notification.error({message: '友情提示：', description: message});
            }
        }).catch(({message})=> {
            notification.error({message: '友情提示：', description: message});
        });
    },
};