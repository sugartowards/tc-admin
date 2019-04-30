/**
 * author            Suger
 * time              2018/8/27
 * class:            RequestLog
 * description:      请求日志
 */
import React from 'react';
import {ManagePage} from 'CtnUi';
import {LogRequest} from '../../../../config/sysTables';

export default class RequestLog extends ManagePage {

    constructor(props, context) {
        super(props, context);
        this.maj = LogRequest.MAJOR_TYPE;
        this.min = LogRequest.MINOR_TYPE;
    }
}