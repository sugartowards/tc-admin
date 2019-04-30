webpackJsonp([3],{/***/
220:/***/
function(e,t,n){"use strict";function _(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var _ in n)Object.prototype.hasOwnProperty.call(n,_)&&(e[_]=n[_])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var _=t[n];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(e,_.key,_)}}return function(t,n,_){return n&&e(t.prototype,n),_&&e(t,_),t}}(),s=function e(t,n,_){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,_)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(_)},c=n(0),l=_(c),L=n(1),D=n(22),A=n(23),f=_(A),d=n(298),p=n(226);n(300);var E=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={menu:{},checkedKeys:[]},n.func=s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"bindFunc",n).call(n,d.MenuManageFunc),n.manageEntity=new f.default({sysFld:[{aliasColName:"模版Page",colName:"template",dispType:"1"},{aliasColName:"表名",colName:"tabName",dispType:"1"}]}),n}return a(t,e),u(t,[{key:"componentWillMount",value:function(){var e=[{text:"新增",click:"addMenu"},{text:"删除",click:"deleteMenu"},{text:"导出AppCfg",click:"exportAppCfg",type:"danger"},{text:"导出模版",click:"exportPage",type:"primary"},{text:"导出脚本",click:"exportSql"}];
// let list = this.props.buttons;
this.buttonListOptions={list:e},this.bindFuncObj(e,this.buttonListOptions),this.treeOptions={ref:d.TreeObj,app:this.context.urlPath.pmsn.menuTree,checkable:!0,draggable:!0,defaultExpandAll:!0,checkStrictly:!0,dataKey:{key:"id",title:"title"},onSelect:this.func.menuSelect},this.formOptions={ref:d.FormObj,sysEntity:this.getSysEntity(p.SysMenu.MAJOR_TYPE,p.SysMenu.MINOR_TYPE)},this.buttonOptions={type:"primary",onClick:this.func.onSave}}},{key:"render",value:function(){var e=0==Object.keys(this.state.menu).length;return l.default.createElement(L.Row,{type:"flex",justify:"space-around",className:"ca-menumanage-body"},l.default.createElement(L.Col,{span:11},l.default.createElement(D.Panel,{title:"菜单组织结构"},l.default.createElement(D.ButtonList,this.buttonListOptions),l.default.createElement(D.Tree,this.treeOptions))),l.default.createElement(L.Col,{span:11},l.default.createElement(D.Panel,{title:"菜单属性",extra:l.default.createElement(L.Button,i({},this.buttonOptions,{disabled:e}),"保存")},l.default.createElement(D.Form,this.formOptions))))}}]),t}(D.Page);t.default=E},/***/
226:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var _=n(227);Object.keys(_).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return _[e]}})});var r=n(228);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=n(229);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var a=n(230);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var i=n(231);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var u=n(232);Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})});var s=n(233);Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})});var c=n(234);Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})});var l=n(235);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})});var L=n(236);Object.keys(L).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return L[e]}})});var D=n(237);Object.keys(D).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return D[e]}})});var A=n(238);Object.keys(A).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return A[e]}})})},/***/
227:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SysTab={
//SysTab信息
MINOR_TYPE:"2",MAJOR_TYPE:"10101",TAB_NAME:"sys_tab",ALIAS_TAB_NAME:"表信息表",
//SysFld（FLD_字段大写）
FLD_MAJOR_TYPE:"major_type",FLD_MINOR_TYPE:"minor_type",FLD_ASSO_MAJOR:"asso_major",FLD_ASSO_MINOR:"asso_minor",FLD_TAB_NAME:"tab_name",FLD_ALIAS_TAB_NAME:"alias_tab_name"}},/***/
228:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SysFld={
//SysTab信息
MINOR_TYPE:"3",MAJOR_TYPE:"10101",TAB_NAME:"sys_fld",ALIAS_TAB_NAME:"字段表",
//SysFld（FLD_字段大写）
FLD_TAB_NAME:"tab_name",FLD_COL_NAME:"col_name",FLD_ALIAS_COL_NAME:"alias_col_name",FLD_DISP_ORDER:"disp_order",FLD_QUERY_CONTROLLER:"query_controller",FLD_SHOW_CONTROLLER:"show_controller",FLD_EDIT_CONTROLLER:"edit_controller",FLD_ADD_CONTROLLER:"add_controller",FLD_NULLABLE:"nullable",FLD_DISP_TYPE:"disp_type",FLD_DATA_TYPE:"data_type",FLD_PLACE_HOLDER:"place_holder",
//SysFldVal（FLDVAL_字段大写_显示值的中文简拼）
FLDVAL_EDIT_CONTROLLER_BXS:0,FLDVAL_EDIT_CONTROLLER_XS:1,FLDVAL_EDIT_CONTROLLER_XSQKYBJ:2,FLDVAL_DATA_TYPE_ZFC:1,FLDVAL_DATA_TYPE_SZ:2,FLDVAL_DATA_TYPE_KJD:4,FLDVAL_DATA_TYPE_KJDD:5,FLDVAL_DATA_TYPE_KJX:6,FLDVAL_DATA_TYPE_KJM:7,FLDVAL_DATA_TYPE_SJ:8,FLDVAL_DATA_TYPE_RQ:9,FLDVAL_DATA_TYPE_NYR:10,FLDVAL_DATA_TYPE_DDX:11,FLDVAL_QUERY_CONTROLLER_BXS:0,FLDVAL_QUERY_CONTROLLER_XS:1,FLDVAL_QUERY_CONTROLLER_ZDXS:2,FLDVAL_NULLABLE_KY:1,FLDVAL_NULLABLE_BKY:0,FLDVAL_DISP_TYPE_WBK:1,FLDVAL_DISP_TYPE_DQZDWBK:101,FLDVAL_DISP_TYPE_MMK:102,FLDVAL_DISP_TYPE_YXK:103,FLDVAL_DISP_TYPE_SJHK:104,FLDVAL_DISP_TYPE_DHK:105,FLDVAL_DISP_TYPE_CXK:106,FLDVAL_DISP_TYPE_DYYK:107,FLDVAL_DISP_TYPE_YXKHK:108,FLDVAL_DISP_TYPE_PTWBY:2,FLDVAL_DISP_TYPE_FWB:201,FLDVAL_DISP_TYPE_XLK:3,FLDVAL_DISP_TYPE_XLDXK:301,FLDVAL_DISP_TYPE_XLS:302,FLDVAL_DISP_TYPE_CXXL:303,FLDVAL_DISP_TYPE_XLKSRK:304,FLDVAL_DISP_TYPE_CXZDYXLK:305,FLDVAL_DISP_TYPE_RQSJK:4,FLDVAL_DISP_TYPE_RQK:401,FLDVAL_DISP_TYPE_SJK:402,FLDVAL_DISP_TYPE_NYK:403,FLDVAL_DISP_TYPE_SZK:5,FLDVAL_DISP_TYPE_BFSK:501,FLDVAL_DISP_TYPE_JBK:502,FLDVAL_DISP_TYPE_DXRadio:6,FLDVAL_DISP_TYPE_DXcheckbox:601,FLDVAL_DISP_TYPE_FXcheckbox:7,FLDVAL_DISP_TYPE_TPK:8,FLDVAL_DISP_TYPE_WJK:801,FLDVAL_ADD_CONTROLLER_BXS:0,FLDVAL_ADD_CONTROLLER_XS:1,FLDVAL_ADD_CONTROLLER_XSQKYBJ:2,FLDVAL_SHOW_CONTROLLER_BXS:0,FLDVAL_SHOW_CONTROLLER_XS:1}},/***/
229:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SysFldVal={
//SysTab信息
MINOR_TYPE:"4",MAJOR_TYPE:"10101",TAB_NAME:"sys_fld_val",ALIAS_TAB_NAME:"字段可选值表",
//SysFld（FLD_字段大写）
FLD_TAB_NAME:"tab_name",FLD_COL_NAME:"col_name",FLD_DB_VAL:"db_val",FLD_DISP_VAL:"disp_val",FLD_DISP_ORDER:"disp_order"}},/***/
230:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SysMenu={
//SysTab信息
MINOR_TYPE:"2",MAJOR_TYPE:"10102",TAB_NAME:"sys_menu",ALIAS_TAB_NAME:"菜单表",
//SysFld（FLD_字段大写）
FLD_ID:"id",FLD_SUPER_ID:"super_id",FLD_LEVEL_TYPE:"level_type",FLD_TITLE:"title",FLD_URL:"url",FLD_CLICK:"click",FLD_TYPE:"type",FLD_MENU_TYPE:"menu_type",FLD_BUTTON_TYPE:"button_type",FLD_BUTTON_SHOW_TYPE:"button_show_type",FLD_DISP_ORDER:"disp_order",FLD_ICON:"icon",FLD_VISIBLE:"visible",
//SysFldVal（FLDVAL_字段大写_显示值的中文简拼）
FLDVAL_MENU_TYPE_ManagePage:1,FLDVAL_VISIBLE_XS:1,FLDVAL_VISIBLE_BXS:0,FLDVAL_BUTTON_TYPE_BGS:110,FLDVAL_BUTTON_TYPE_BGSBXY:111,FLDVAL_BUTTON_TYPE_BGY:120,FLDVAL_BUTTON_TYPE_BGSY:130,FLDVAL_BUTTON_TYPE_BGSYBXY:131,FLDVAL_BUTTON_TYPE_SS:210,FLDVAL_BUTTON_TYPE_SSBXY:211,FLDVAL_TYPE_CD:1,FLDVAL_TYPE_AN:2}},/***/
231:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SysUrl={
//SysTab信息
ALIAS_TAB_NAME:"服务路径",TAB_NAME:"sys_url",MAJOR_TYPE:"10203",MINOR_TYPE:"2",
//SysFld（FLD_字段大写）
FLD_ID:"id",FLD_NAME:"name",FLD_MODULE:"module",FLD_PATH:"path"}},/***/
232:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PmsnUser={
//SysTab信息
ASSO_MINOR:"3",MINOR_TYPE:"2",MAJOR_TYPE:"10401",TAB_NAME:"pmsn_user",ALIAS_TAB_NAME:"用户",ASSO_MAJOR:"10401",
//SysFld（FLD_字段大写）
FLD_ID:"id",FLD_LOGIN_NAME:"login_name",FLD_USER_NAME:"user_name",FLD_PASSWORD:"password",FLD_TEL:"tel",FLD_MOBILE:"mobile",FLD_EMAIL:"email",FLD_ASSO_ID:"asso_id",FLD_ENABLE:"enable",FLD_IMAGE:"image",
//SysFldVal（FLDVAL_字段大写_显示值的中文简拼）
FLDVAL_ENABLE_QY:1,FLDVAL_ENABLE_BQY:0}},/***/
233:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PmsnDept={
//SysTab信息
MINOR_TYPE:"3",MAJOR_TYPE:"10401",TAB_NAME:"pmsn_dept",ALIAS_TAB_NAME:"部门",
//SysFld（FLD_字段大写）
FLD_ID:"id",FLD_NAME:"name",FLD_SUPER_ID:"super_id",FLD_LEADER:"leader",FLD_MOBILE:"mobile"}},/***/
234:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PmsnRole={
//SysTab信息
MINOR_TYPE:"4",MAJOR_TYPE:"10401",TAB_NAME:"pmsn_role",ALIAS_TAB_NAME:"角色",
//SysFld（FLD_字段大写）
FLD_ID:"id",FLD_NAME:"name",FLD_COMMENT:"comment"}},/***/
235:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PmsnUserRole={
//SysTab信息
MINOR_TYPE:"5",MAJOR_TYPE:"10401",TAB_NAME:"pmsn_user_role",ALIAS_TAB_NAME:"用户角色关联",
//SysFld（FLD_字段大写）
FLD_USER_ID:"user_id",FLD_ROLE_ID:"role_id"}},/***/
236:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PmsnRoleMenu={
//SysTab信息
MINOR_TYPE:"2",MAJOR_TYPE:"10402",TAB_NAME:"pmsn_role_menu",ALIAS_TAB_NAME:"角色权限",
//SysFld（FLD_字段大写）
FLD_ROLE_ID:"role_id",FLD_MENU_ID:"menu_id",FLD_ID:"id"}},/***/
237:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LogRequest={
//SysTab信息
MINOR_TYPE:"3",ALIAS_TAB_NAME:"请求日志",TAB_NAME:"log_request",MAJOR_TYPE:"10201",
//SysFld（FLD_字段大写）
FLD_ID:"id",FLD_SERVERNAME:"servername",FLD_METHOD:"method",FLD_REMOTEADDR:"remoteaddr",FLD_REMOTEUSER:"remoteuser",FLD_REMOTEHOST:"remotehost",FLD_REQUESTURI:"requesturi",FLD_REQUESTIP:"requestip",FLD_DATE:"date"}},/***/
238:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LogAction={
//SysTab信息
MINOR_TYPE:"2",ALIAS_TAB_NAME:"操作日志",TAB_NAME:"log_action",MAJOR_TYPE:"10201",
//SysFld（FLD_字段大写）
FLD_ID:"id",FLD_ACTION:"action",FLD_DESCRIPTION:"description",FLD_USERNAME:"username",FLD_MODULENAME:"modulename",FLD_STATUS:"status",FLD_DATE:"date",
//SysFldVal（FLDVAL_字段大写_显示值的中文简拼）
FLDVAL_ACTION_XZ:1,FLDVAL_ACTION_XG:2,FLDVAL_ACTION_SC:3,FLDVAL_ACTION_DL:4,FLDVAL_STATUS_CG:1,FLDVAL_STATUS_SB:2}},/***/
239:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});/**
 * Created by Suger on 2018/1/8.
 */
t.FilePath="http://localhost:9002/"},/***/
243:/***/
function(e,t,n){e.exports=n(5)(758)},/***/
298:/***/
function(e,t,n){"use strict";function _(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MenuManageFunc=t.FormObj=t.TreeObj=void 0;var r=n(1),o=n(243),a=_(o),i=n(60),u=_(i),s=n(22),c=n(239),l=n(226),L=n(299),D=t.TreeObj="treeObj",A=t.FormObj="formObj",f=t.MenuManageFunc={/**
     * 新增菜单
     */
addMenu:function(){var e=this.refs[D],t=e.getChecked(),n=null;n=t.length>0?t[t.length-1]:{children:e.getData()};
//计算id, super_id, level_type, disp_order，其他值默认
var _=null,r=n.children,o=l.SysMenu.FLDVAL_TYPE_CD;r&&r.length?(_=parseInt(r[r.length-1].id)+1,o=r[0].type):_=n.id+"01";var a={id:_,type:o,title:o==l.SysMenu.FLDVAL_TYPE_CD?"新增菜单":"新增按钮",super_id:n.id,level_type:parseInt(n.level_type||0)+1,disp_order:r?r.length+1:1,url:void 0,click:void 0,icon:"icon-cog",visible:l.SysMenu.FLDVAL_VISIBLE_XS};e.addNode(a,n.key)},/**
     * 删除菜单
     */
deleteMenu:function(){var e=this.refs[D];e.deleteNode(e.getChecked())},/**
     * 导出APP配置
     */
exportAppCfg:function(){var e=this.refs[D].getData(),t="import React from 'react';\r\n\r\n",n={};f._getByMenuCodeStr(e,n),t+="export const AppMap = {\r\n";for(var _ in n)t+="    '"+_+"': "+n[_]+",\r\n";t+="};\r\n";var r=[];r.push({path:"src/config",fileName:"appCfg.js",code:t}),r.length&&f._writeFile.call(this,r)},/**
     * 导出模版
     */
exportPage:function(){var e=[],t=this.refs[D].getChecked();t.length||r.notification.info({message:"友情提示：",description:"请勾选需要导出的菜单！"}),t.forEach(function(t){if(t.url){var n=t.url.split("/"),_=n[0],r=n[1];3==n.length&&(_=n[0]+"/"+n[1],r=n[2]);var o=Object.assign({},{pageName:r,pageNameUpper:r.charAt(0).toUpperCase()+r.substr(1),dateStr:(new Date).toLocaleDateString(),tabName:"SysMenu",title:t.title}),a=L.TemplateCfg[o.template]||s.ManagePage.name;e.push({path:"src/app/"+_+"/page",fileName:r+".js",code:L.Template[a](o)});
//处理按钮
var i=t.children||[];i.length&&i[0][l.SysMenu.FLD_TYPE]==l.SysMenu.FLDVAL_TYPE_AN&&(o.buttons=i,e.push({path:"src/app/"+_+"/function",fileName:r+".js",code:L.Template[a+"Func"](o)}))}}),e.length&&this.func._writeFile(e)},/**
     * 导出菜单插入SQL
     */
exportSql:function(){var e=this.refs[D].getData(),t="delete from `"+l.SysMenu.TAB_NAME+"`;\r\n"+f._getSqlByMenu(e),n=new Blob([t],{type:"text/plain;charset=utf-8"}),_=(new Date).toLocaleDateString()+"-main_menu.sql";a.default.saveAs(n,_)},/**
     * 菜单属性保存按钮的响应
     */
onSave:function(){var e=this.refs[A].getFieldsValue();this.refs[D].updateNode(e),r.notification.info({message:"友情提示：",description:"保存成功！"})},/**
     * 选中一个菜单
     * @param selectedKeys
     * @param node
     */
menuSelect:function(e,t){var n=t.node,_={};_=n.props.children?n.props.dataRef.attribute:n.props.attribute,this.refs[A].resetFields(),this.refs[A].setFieldsValue(_),this.setState({menu:_})},/**
     * 获取菜单导出的SQL语句
     * @param menuData
     * @param level
     * @returns {string}
     * @private
     */
_getSqlByMenu:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n="";return e.forEach(function(e){var _=e.attribute,r=_.children,o=_.options;delete _.children,delete _.options;for(var a in _)
//去掉Val（数据库中查询出来会存在）、数据为空
(a.lastIndexOf("val")>0||!_[a])&&delete _[a];n+="INSERT INTO `"+l.SysMenu.TAB_NAME+"` (`"+Object.keys(_).join("`,`")+"`)values ('"+Object.values(_).join("','")+"');\r\n",Object.assign(_,{children:r,options:o}),r&&r.length&&(n+=f._getSqlByMenu(r,t+1)),0==t&&(n+="\r\n")}),n},/**
     * 根据菜单数据，转化为AppCfg文件的代码
     * @param menuData
     * @param appMap
     * @returns {string}
     * @private
     */
_getByMenuCodeStr:function(e,t){var n=!0,_=!1,r=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var i=o.value;if(i.url&&!t[i.url]){var u=i.url.split("/"),s=u[0],c=u[1];3==u.length&&(s=u[0]+"/"+u[1],c=u[2]);c&&c.charAt(0).toUpperCase()+c.substr(1),c&&(t[i.url]='() => import(/* webpackChunkName: "'+c+"\" */'../app/"+s+"/page/"+c+"')")}i.children&&f._getByMenuCodeStr(i.children,t)}}catch(e){_=!0,r=e}finally{try{!n&&a.return&&a.return()}finally{if(_)throw r}}},/**
     *
     * 调用nodejs发布的FILE服务，将代码目录及文件写入到当前代码环境中
     * @param files [{path: 'src/app/user/page', fileName: 'userManage.js', code: '1234555'}]
     * @private
     */
_writeFile:function(e){(0,u.default)(""+c.FilePath+this.context.urlPath.config.exportTemplate,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Accept:"application/json;charset=utf-8"},body:JSON.stringify({files:e}),mode:"cors"}).then(function(e){if(e.ok)return e.json()}).then(function(e){var t=e.state,n=e.message;t?r.notification.success({message:"友情提示：",description:"导出成功！"}):r.notification.error({message:"友情提示：",description:n})}).catch(function(e){var t=e.message;r.notification.error({message:"友情提示：",description:t})})}}},/***/
299:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateCfg=t.Template=void 0;var _=n(226);t.Template={ManagePage:function(e){var t=e.tabName,n=e.pageName,_=e.pageNameUpper;return"/**\n * Created by CtnFrame-Admin on "+e.dateStr+".\n * "+e.title+"\n */\nimport React from 'react';\nimport {ManagePage} from 'CtnUi';\nimport {"+t+"} from '../../../../config/sysTables';\nimport {"+_+"Func} from '../function/"+n+"';\n\nexport default class "+_+" extends ManagePage {\n\n    constructor(props, context){\n        super(props, context);\n        this.maj= "+t+".MAJOR_TYPE;\n        this.min= "+t+".MINOR_TYPE;\n        this.func = super.bindFunc("+_+"Func);\n    }\n    \n}"},ManagePageFunc:function(e){var t=e.tabName,n=e.pageNameUpper,_=e.dateStr,r=e.buttons,o=r.map(function(e){return e.click.indexOf("insert")>=0?"    /**\n     * "+e.title+"\n     */\n    "+e.click+": function () {\n        let {urlPath} = this.context;\n        this.insert({\n            app: `${urlPath.config.common}/${"+t+".TAB_NAME}`,\n        });\n    },\n":e.click.indexOf("update")>=0||e.click.indexOf("edit")>=0?"    /**\n     * "+e.title+"\n     * @param rows\n     */\n    "+e.click+": function (rows) {\n        let {urlPath} = this.context;\n        this.update({\n            app: `${urlPath.config.common}/${"+t+".TAB_NAME}/${rows[0].id}`,\n            formOptions: {\n                defaultValue: rows[0],\n            }\n        });\n    },\n":e.click.indexOf("delete")>=0?"    /**\n     * "+e.title+"\n     * @param rows\n     */\n    "+e.click+": function (rows) {\n        let {urlPath} = this.context;\n        this.delete({\n            app: `${urlPath.config.common}/${"+t+".TAB_NAME}/${rows[0].id}`,\n        });\n    },\n":e.click.indexOf("query")>=0?"    /**\n     * "+e.title+"\n     * @param rows\n     */\n    "+e.click+": function (rows) {\n        this.query({\n            formOptions: {\n                defaultValue: rows[0]\n            }\n        });\n    },\n":"    /**\n     * "+e.title+"\n     * @param rows\n     */\n    "+e.click+": function (rows) {\n        //Todo\n        console.info(this);\n    },\n"});return"/**\n * Created by CtnFrame-Admin on "+_+".\n */\nimport {"+t+"} from '../../../../config/sysTables';\n \nexport const "+n+"Func = {\n\n"+o.join("\r\n")+"\n};"}};(t.TemplateCfg={})[_.SysMenu.FLDVAL_MENU_TYPE_ManagePage]="ManagePage"},/***/
300:/***/
function(e,t,n){
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var _=n(301);"string"==typeof _&&(_=[[e.i,_,""]]);
// Prepare cssTransformation
var r={hmr:!0};r.transform=void 0;
// add the styles to the DOM
n(4)(_,r);_.locals&&(e.exports=_.locals)},/***/
301:/***/
function(e,t,n){t=e.exports=n(3)(void 0),
// imports
// module
t.push([e.i,"\r\n.ca-menumanage-body {\r\n    margin: 20px;\r\n    padding: 20px;\r\n    background-color: white;\r\n}",""])}});