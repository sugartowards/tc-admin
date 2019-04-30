/**
 * Created by CtnFrame-Admin on 2018/5/7.
 */
import React from 'react';
import {ManagePage} from 'CtnUi';
import {PmsnRole} from '../../../../config/sysTables';
import {RoleManageFunc} from '../function/roleManage';

export default class RoleManage extends ManagePage {

    constructor(props, context) {
        super(props, context);
        this.maj = PmsnRole.MAJOR_TYPE;
        this.min = PmsnRole.MINOR_TYPE;
        this.app = context.urlPath.pmsn.role;
        this.func = this.bindFunc(RoleManageFunc);
    }
};