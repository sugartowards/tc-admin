/**
 * Created by CtnFrame-Admin on 2018/4/19.
 */
import React from 'react';
import {ManagePage} from 'CtnUi';
import {PmsnDept} from '../../../../config/sysTables';
import {DeptManageFunc} from '../function/deptManage';

export default class DeptManage extends ManagePage {

    constructor(props, context) {
        super(props, context);
        this.maj = PmsnDept.MAJOR_TYPE;
        this.min = PmsnDept.MINOR_TYPE;
        this.app = context.urlPath.pmsn.dept;
        this.func = this.bindFunc(DeptManageFunc);
    };

    /**
     * 给表格和查询控件增加自定义属性
     */
    componentWillMount() {
        super.componentWillMount();
        Object.assign(this.dataGridOptions, {
            [PmsnDept.FLD_SUPER_ID]: {
                dataIndex: `super_info.${PmsnDept.FLD_NAME}`
            }
        });
    };
};