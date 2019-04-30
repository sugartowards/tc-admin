/**
 * Created by CtnFrame-Admin on 2018/4/19.
 */
import React from 'react';
import {Util} from 'CtnUi';
import LinkRoles from '../page/linkRoles';
import {PmsnUser} from '../../../../config/sysTables';

export const UserManageFunc = {

    /**
     * 新增
     */
    insertData: function () {
        let {urlPath} = this.context;
        this.insert({
            app: this.app,
            formOptions: {
                asso_id: {
                    app: urlPath.pmsn.deptTree,
                },
                enable: {
                    defaultValue: PmsnUser.FLDVAL_ENABLE_QY
                }
            }
        });
    },

    /**
     * 查看
     * @param rows
     */
    queryData: function (rows) {
        let {urlPath} = this.context;
        this.query({
            formOptions: {
                defaultValue: rows[0],
                asso_id: {
                    app: urlPath.pmsn.deptTree,
                }
            }
        });
    },

    /**
     * 删除
     * @param rows
     */
    deleteData: function (rows) {
        this.delete({
            app: `${this.app}/${rows[0].id}`,
        });
    },

    /**
     * 编辑
     * @param rows
     */
    updateData: function (rows) {
        let {urlPath} = this.context;
        this.update({
            app: `${this.app}/${rows[0].id}`,
            formOptions: {
                defaultValue: rows[0],
                asso_id: {
                    app: urlPath.pmsn.deptTree,
                }
            }
        });
    },

    /**
     * 重置密码
     * @param rows
     */
    resetPassword: function (rows) {
        let {urlPath} = this.context;
        Util.Fetch.put(`${urlPath.pmsn.resetPassword}/${rows[0].id}`, null, ()=> {
            this.refresh();
            Util.Messager.info('重置密码成功');
        });
    },

    /**
     * 关联角色
     * @param rows
     */
    linkRole: function (rows) {
        this.dialog({
            title: '关联角色',
            iconType: 'user-add',
            App: LinkRoles,
            component: {
                user: rows[0]
            }
        });
    },

};