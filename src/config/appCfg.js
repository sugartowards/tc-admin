/**
 * author            Suger
 * time              2018/9/18
 * class:
 * description:      主文件依赖的代码分离成模块
 */
import React from 'react';
import {Bundle} from 'CtnUi';
import {AppMap} from './menuCfg';

export let Login = (props) => <Bundle {...props} promise={import(/* webpackChunkName: "login" */'../app/system/login/page/login')}/>;
export let Index = (props) => <Bundle {...props} promise={import(/* webpackChunkName: "index" */'../app/system/login/page/index')} appMap={AppMap}/>;
export let sysEntitysPromise = import(/* webpackChunkName: "sysEntitys" */'./sysEntitys');
export let urlPathPromise = import(/* webpackChunkName: "urlCfg" */'./urlCfg');
export let servicePath = window.ServicePath;
