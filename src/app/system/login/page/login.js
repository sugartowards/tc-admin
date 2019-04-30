/**
 * Created by Suger on 2018/1/7.
 */
import React from 'react';
import {LoginPage} from 'CtnUi';

export default class Login extends LoginPage {

    constructor(props, context) {
        super(props, context);
        this.app = context.urlPath.pmsn.login;
        this.imgApp = context.urlPath.kaptcha.kaptcha;
    }
}