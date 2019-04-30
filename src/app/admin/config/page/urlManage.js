/**
 * Created by CtnFrame-Admin on 2018/4/19.
 */
import React from 'react';
import {ManagePage} from 'CtnUi';
import {SysUrl} from '../../../../config/sysTables';
import {UrlManageFunc} from '../function/urlManage';

export default class UrlManage extends ManagePage {

    constructor(props, context) {
        super(props, context);
        this.maj = SysUrl.MAJOR_TYPE;
        this.min = SysUrl.MINOR_TYPE;
        this.func = this.bindFunc(UrlManageFunc);
    }
};