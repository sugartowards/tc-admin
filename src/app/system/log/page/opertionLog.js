/**
 * author            Suger
 * time              2018/8/27
 * class:            OpertionLog
 * description:      操作日志
 */
import React from 'react';
import {ManagePage} from 'CtnUi';
import {LogAction} from '../../../../config/sysTables';

export default class OpertionLog extends ManagePage {

    constructor(props, context) {
        super(props, context);
        this.maj = LogAction.MAJOR_TYPE;
        this.min = LogAction.MINOR_TYPE;
    }
}