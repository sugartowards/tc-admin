/**
 * Created by CtnFrame-Admin on 2018/4/19.
 */
import React from 'react';
import {ManagePage} from 'CtnUi';
import {PmsnUser} from '../../../../config/sysTables';
import {UserManageFunc} from '../function/userManage';

export default class UserManage extends ManagePage {

    constructor(props, context) {
        super(props, context);
        this.maj = PmsnUser.MAJOR_TYPE;
        this.min = PmsnUser.MINOR_TYPE;
        this.app = context.urlPath.pmsn.user;
        this.func = this.bindFunc(UserManageFunc);
    }

    /**
     * 给表格和查询控件增加自定义属性
     */
    componentWillMount() {
        super.componentWillMount();
        let {urlPath} = this.context;
        Object.assign(this.queryOptions, {
            asso_id: {
                app: urlPath.pmsn.deptTree,
            },
        });
        Object.assign(this.dataGridOptions, {
            asso_id: {
                dataIndex: 'asso_info.name'
            },
        });
    }
};