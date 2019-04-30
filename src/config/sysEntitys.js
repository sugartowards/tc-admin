/**
 * Created by Suger on 2018/4/2.
 */
const SysEntitys = {};

export default SysEntitys;

import {SysTab} from './entitys/SysTab';
SysEntitys[SysTab.majorType] = SysEntitys[SysTab.majorType] || {};
SysEntitys[SysTab.majorType][SysTab.minorType] = SysTab;

import {SysFld} from './entitys/SysFld';
SysEntitys[SysFld.majorType] = SysEntitys[SysFld.majorType] || {};
SysEntitys[SysFld.majorType][SysFld.minorType] = SysFld;

import {SysFldVal} from './entitys/SysFldVal';
SysEntitys[SysFldVal.majorType] = SysEntitys[SysFldVal.majorType] || {};
SysEntitys[SysFldVal.majorType][SysFldVal.minorType] = SysFldVal;

import {SysMenu} from './entitys/SysMenu';
SysEntitys[SysMenu.majorType] = SysEntitys[SysMenu.majorType] || {};
SysEntitys[SysMenu.majorType][SysMenu.minorType] = SysMenu;

import {SysUrl} from './entitys/SysUrl';
SysEntitys[SysUrl.majorType] = SysEntitys[SysUrl.majorType] || {};
SysEntitys[SysUrl.majorType][SysUrl.minorType] = SysUrl;

import {PmsnUser} from './entitys/PmsnUser';
SysEntitys[PmsnUser.majorType] = SysEntitys[PmsnUser.majorType] || {};
SysEntitys[PmsnUser.majorType][PmsnUser.minorType] = PmsnUser;

import {PmsnDept} from './entitys/PmsnDept';
SysEntitys[PmsnDept.majorType] = SysEntitys[PmsnDept.majorType] || {};
SysEntitys[PmsnDept.majorType][PmsnDept.minorType] = PmsnDept;

import {PmsnRole} from './entitys/PmsnRole';
SysEntitys[PmsnRole.majorType] = SysEntitys[PmsnRole.majorType] || {};
SysEntitys[PmsnRole.majorType][PmsnRole.minorType] = PmsnRole;

import {PmsnRoleMenu} from './entitys/PmsnRoleMenu';
SysEntitys[PmsnRoleMenu.majorType] = SysEntitys[PmsnRoleMenu.majorType] || {};
SysEntitys[PmsnRoleMenu.majorType][PmsnRoleMenu.minorType] = PmsnRoleMenu;

import {PmsnUserRole} from './entitys/PmsnUserRole';
SysEntitys[PmsnUserRole.majorType] = SysEntitys[PmsnUserRole.majorType] || {};
SysEntitys[PmsnUserRole.majorType][PmsnUserRole.minorType] = PmsnUserRole;

import {LogRequest} from './entitys/LogRequest';
SysEntitys[LogRequest.majorType] = SysEntitys[LogRequest.majorType] || {};
SysEntitys[LogRequest.majorType][LogRequest.minorType] = LogRequest;

import {LogAction} from './entitys/LogAction';
SysEntitys[LogAction.majorType] = SysEntitys[LogAction.majorType] || {};
SysEntitys[LogAction.majorType][LogAction.minorType] = LogAction;
