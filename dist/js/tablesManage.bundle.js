webpackJsonp([2],{/***/
209:/***/
function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatusNone=t.StatusNew=t.StatusHas=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function e(t,n,a){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,a)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(a)},_=n(0),c=a(_),d=n(22),f=n(23),L=a(f),D=n(226),E=n(302),T=a(E),A=n(304);n(307);var p=d.DataGrid.ToolBar,F=t.StatusHas=1,y=t.StatusNew=2,b=t.StatusNone=3,h=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={sysTab:null,index:null},n.func=l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"bindFunc",n).call(n,A.TablesManageFunc),n.sysEntity=new L.default({sysFld:[{aliasColName:"表名",colName:"tab_name",dispType:"1",queryController:"2"},{aliasColName:"说明",colName:"alias_tab_name",queryController:"0"},{aliasColName:"状态(SysEntity)",colName:"status",queryController:"0"}]}),n}return i(t,e),u(t,[{key:"componentWillMount",value:function(){var e=[{text:"配置",buttonType:p.ROW,click:"configTab"},{text:"导出SQL",buttonType:p.ANY_ONE,click:"exportSql"},{text:"导出Table",buttonType:p.ANY_ONE,click:"exportJsTable"},{text:"导出服务Table",buttonType:p.ANY_ONE,click:"exportJavaTable"},{text:"导出Entity",buttonType:p.ANY_ONE,click:"exportEntity"}];
// let toolBar = this.props.buttons;
this.dataGridOptions={ref:A.DataGridObj,app:this.context.urlPath.config.queryDbTable,sysEntity:this.sysEntity,rowKey:"TABLE_NAME",toolBar:e,status:{render:function(e,t){var n="red",a=t[D.SysTab.TAB_NAME]&&t[D.SysFld.TAB_NAME];//默认存在
return t.status==F||!t.status&&a?(t.status=F,e="已配置",n="#EEE"):t.status==y&&(a?(e="配置完成",n="green"):(e="配置中...",n="blue")),t.status!=b&&a||(t.status=b,e="未配置"),c.default.createElement("font",{style:{color:n}},e)}}},this.bindFuncObj(e,this.dataGridOptions),this.tablesEditOptions={success:this.func.configTabSuccess},this.queryOptions={sysEntity:this.sysEntity,queryClick:this.func.queryClick}}},{key:"render",value:function(){var e=this.state.sysTab;return c.default.createElement("div",{className:"ca-tablesmanage-body"},c.default.createElement("div",{style:{display:e?"none":"block"}},c.default.createElement(d.Query,this.queryOptions),c.default.createElement(d.DataGrid,this.dataGridOptions)),e?c.default.createElement(T.default,s({},this.tablesEditOptions,{sysTab:this.state.sysTab})):null)}}]),t}(d.Page);t.default=h},/***/
226:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(227);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var r=n(228);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=n(229);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var i=n(230);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var s=n(231);Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})});var u=n(232);Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})});var l=n(233);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})});var _=n(234);Object.keys(_).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return _[e]}})});var c=n(235);Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})});var d=n(236);Object.keys(d).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}})});var f=n(237);Object.keys(f).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}})});var L=n(238);Object.keys(L).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return L[e]}})})},/***/
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
302:/***/
function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=function e(t,n,a){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,a)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(a)},u=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(u),_=n(1),c=n(22),d=n(226),f=n(303),L=c.DataGrid.ToolBar,D=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.func=s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"bindFunc",n).call(n,f.TablesEditFunc);var o=e.sysTab;return n.sysTab=o[d.SysTab.TAB_NAME]||Object.assign({},o),n.sysFld=o[d.SysFld.TAB_NAME]||[],n.sysFldVal=o[d.SysFldVal.TAB_NAME]||[],n.sysFld&&n.func.onLoadSuccess(n.sysFld),n}return o(t,e),i(t,[{key:"componentWillMount",value:function(){this.tabOptions={ref:f.TabTableObj,sysEntity:this.getSysEntity(d.SysTab.MAJOR_TYPE,d.SysTab.MINOR_TYPE),rowKey:d.SysTab.FLD_TAB_NAME,pagination:!1,size:"small",dataSource:[this.sysTab],major_type:{render:this.getDomForInputNumber(d.SysTab.FLD_MAJOR_TYPE,f.TabTableObj)},minor_type:{render:this.getDomForInputNumber(d.SysTab.FLD_MINOR_TYPE,f.TabTableObj)},asso_major:{render:this.getDomForInputNumber(d.SysTab.FLD_ASSO_MAJOR,f.TabTableObj)},asso_minor:{render:this.getDomForInputNumber(d.SysTab.FLD_ASSO_MINOR,f.TabTableObj)},alias_tab_name:{render:this.getDomForInput(d.SysTab.FLD_ALIAS_TAB_NAME,f.TabTableObj)}},this.fldOptions={ref:f.FldTableObj,submitType:c.Util.Fetch.GET,app:this.sysFld.length?null:this.context.urlPath.config.queryDbFld,dataSource:this.sysFld,sysEntity:this.getSysEntity(d.SysFld.MAJOR_TYPE,d.SysFld.MINOR_TYPE),rowKey:d.SysTab.FLD_COL_NAME,pagination:!1,size:"small",onDrag:this.func.onDrag,onLoadSuccess:this.func.onLoadSuccess,params:{tabName:this.props.sysTab[d.SysTab.FLD_TAB_NAME]},query_controller:{render:this.getDomForNumChange(d.SysFld.FLD_QUERY_CONTROLLER,null,"0,2",2)},show_controller:{render:this.getDomForNumChange(d.SysFld.FLD_SHOW_CONTROLLER,1)},edit_controller:{render:this.getDomForNumChange(d.SysFld.FLD_EDIT_CONTROLLER,2)},add_controller:{render:this.getDomForNumChange(d.SysFld.FLD_ADD_CONTROLLER,2)},nullable:{render:this.getDomForNumChange(d.SysFld.FLD_NULLABLE,1)},alias_col_name:{render:this.getDomForInput(d.SysFld.FLD_ALIAS_COL_NAME,f.FldTableObj)},place_holder:{render:this.getDomForInput(d.SysFld.FLD_PLACE_HOLDER,f.FldTableObj)},disp_type:{render:this.getDomForSelect(d.SysFld.FLD_DISP_TYPE,f.FldTableObj)},data_type:{render:this.getDomForSelect(d.SysFld.FLD_DATA_TYPE,f.FldTableObj)}};var e=[{text:"新增",buttonType:L.TOP,click:"addFldVal"},{text:"删除",buttonType:L.TOP_ONE,click:"delFldVal"}];this.fldValOptions={ref:f.FldValTableObj,sysEntity:this.getSysEntity(d.SysFldVal.MAJOR_TYPE,d.SysFldVal.MINOR_TYPE),dataSource:this.sysFldVal,toolBar:e,pagination:!1,size:"small",db_val:{render:this.getDomForInput(d.SysFldVal.FLD_DB_VAL,f.FldValTableObj)},disp_val:{render:this.getDomForInput(d.SysFldVal.FLD_DISP_VAL,f.FldValTableObj)},disp_order:{render:this.getDomForInputNumber(d.SysFldVal.FLD_DISP_ORDER,f.FldValTableObj)},col_name:{render:this.getDomForCol(d.SysFldVal.FLD_COL_NAME,f.FldValTableObj)}},this.bindFuncObj(e,this.fldValOptions);var t=[{type:"primary",text:l.default.createElement("b",null,l.default.createElement(_.Icon,{type:"left"})," 完成配置"),click:"success"}];this.buttonListOptions={list:t,success:this.func.success},this.rowOptions={style:{marginBottom:15},type:"flex",align:"middle"}}},{key:"render",value:function(){var e=this;return l.default.createElement("div",{ref:function(t){return e.containerDiv=t}},l.default.createElement(_.Row,this.rowOptions,l.default.createElement(c.ButtonList,this.buttonListOptions)),l.default.createElement(_.Row,this.rowOptions,l.default.createElement(_.Col,{span:24},l.default.createElement(c.DataGrid,this.tabOptions))),l.default.createElement(_.Row,this.rowOptions,l.default.createElement(_.Col,{span:24},l.default.createElement(c.DragDataGrid,this.fldOptions))),l.default.createElement(_.Row,this.rowOptions,l.default.createElement(_.Col,{span:24},l.default.createElement(c.DataGrid,this.fldValOptions))))}},{key:"getDomForNumChange",value:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"1";return function(o,i,s){
//设置默认值
i[e]=void 0==o||null==o?r:""+o;
//设置按钮类型(颜色)
var u={field:e,rowIndex:s,maxMum:t,towNums:a,onClick:n.func.changeNum};return"2"==i[e]?u.type="primary":"0"==i[e]&&(u.ghost=!0),l.default.createElement(_.Button,u,o)}}},{key:"getDomForInput",value:function(e,t){var n=this;return function(a,r,o){return l.default.createElement(_.Input,{field:e,rowIndex:o,value:a,obj:t,onChange:n.func.changeText})}}},{key:"getDomForInputNumber",value:function(e,t){var n=this;return function(a,r,o){var i={field:e,index:o,obj:t,change:n.func.changeSelect};return l.default.createElement(_.InputNumber,{defaultValue:a,style:{width:"100%"},min:1,option:i,onChange:function(e){this.option.change(e,this.option)}})}}},{key:"getDomForSelect",value:function(e,t){var n=this,a=this.context.sysEntitys[d.SysFld.MAJOR_TYPE][d.SysFld.MINOR_TYPE].sysFldVal[e];return function(r,o,i){var s={field:e,index:i,obj:t,change:n.func.changeSelect},u=r||(a.length?a[0].dbVal:null);return o[e]=u,l.default.createElement(_.Select,{option:s,defaultValue:u,style:{width:"100%"},onChange:function(e){this.option.change(e,this.option)}},a.map(function(e){var t=e.dbVal,n=e.dispVal;return l.default.createElement(Option,{key:""+t,value:t},n)}))}}},{key:"getDomForCol",value:function(e,t){var n=this;return function(a,r,o){var i={field:e,index:o,obj:t,change:n.func.changeSelect},s=n.columns,u=a||(s.length?s[0]:null);return r[e]=u,l.default.createElement(_.Select,{option:i,defaultValue:u,style:{width:"100%"},onChange:function(e){this.option.change(e,this.option)}},s.map(function(e){return l.default.createElement(Option,{key:e,value:e},e)}))}}}]),t}(c.Page);t.default=D},/***/
303:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TablesEditFunc=t.FldValTableObj=t.FldTableObj=t.TabTableObj=void 0;var a=n(226),r=n(209),o=t.TabTableObj="tabTableObj",i=t.FldTableObj="fldTableObj",s=t.FldValTableObj="fldValTableObj";t.TablesEditFunc={success:function(){var e=Object.assign({},this.props.sysTab,{status:r.StatusNew});e[a.SysTab.TAB_NAME]=this.refs[o].getData()[0],e[a.SysFld.TAB_NAME]=this.refs[i].child.getData(),e[a.SysFldVal.TAB_NAME]=this.refs[s].getData(),this.props.success(e)},/**
     * 新增行
     */
addFldVal:function(){var e=this,t=this.refs[s],n={id:t.getData().length};n[a.SysFldVal.FLD_TAB_NAME]=this.refs[o].getData()[0][a.SysTab.FLD_TAB_NAME];var r=t.getData();r.length?(n[a.SysFldVal.FLD_COL_NAME]=r[r.length-1][a.SysFldVal.FLD_COL_NAME],n[a.SysFldVal.FLD_DISP_ORDER]=(r[r.length-1][a.SysFldVal.FLD_DISP_ORDER]||0)+1):n[a.SysFldVal.FLD_DISP_ORDER]=1,t.addRow(n),setTimeout(function(){return window.scrollTo(0,e.containerDiv.clientHeight)},100)},/**
     * 删除行
     */
delFldVal:function(e){this.refs[s].deleteRow(e)},/**
     * 0-maxMum之间切换
     * @param target
     */
changeNum:function(e){var t=e.target,n=t.getAttribute("field"),a=t.getAttribute("rowIndex"),r=t.getAttribute("maxMum"),o=t.getAttribute("towNums").split(","),s=parseInt(t.innerText);r?(s+=1,s=s>r?0:s):s=o[0]==s?o[1]:o[0];var u={};u[n]=""+s,this.refs[i].child.updateRow(u,a)},/**
     * 文本修改更新行
     * @param target
     */
changeText:function(e){var t=e.target,n=t.getAttribute("field"),a=t.getAttribute("rowIndex"),r=t.getAttribute("obj")||i,o={};o[n]=t.value,r==i?this.refs[r].child.updateRow(o,a):this.refs[r].updateRow(o,a)},/**
     * 下拉框修改更新行
     * @param value
     * @param field
     * @param index
     * @param obj
     */
changeSelect:function(e,t){var n=t.field,a=t.index,r=t.obj,o=void 0===r?i:r,s={};s[n]=e,o==i?this.refs[o].child.updateRow(s,a):this.refs[o].updateRow(s,a)},onLoadSuccess:function(e){var t=[];e.map(function(e){t.push(e[a.SysFld.FLD_COL_NAME])}),this.columns=t},/**
     * 拖动之后触发的函数
     * @param dataSource
     */
onDrag:function(e){e.map(function(e,t){e[a.SysFld.FLD_DISP_ORDER]=t+1})}}},/***/
304:/***/
function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TablesManageFunc=t.DataGridObj=void 0;var r=n(1),o=n(243),i=a(o),s=n(60),u=a(s),l=n(239),_=n(226),c=n(209),d=n(305),f=n(306),L=t.DataGridObj="dataGridObj",D=t.TablesManageFunc={/**
     * 查询按钮
     */
queryClick:function(e){this.refs[L].loader(e)},/**
     * 编辑
     * @param rows
     * @param index
     */
configTab:function(e,t){this.setState({sysTab:e[0],index:t})},/**
     * 导出SQL
     * @param rows
     */
exportSql:function(e){if(e.some(function(e){return e.status==c.StatusNone}))return void r.notification.warning({message:"友情提示：",description:"未配置是不能导出SQL的"});var t="";e.map(function(e){var n=e[_.SysTab.TAB_NAME],a=e[_.SysFld.TAB_NAME],r=e[_.SysFldVal.TAB_NAME]||[],o=n[_.SysTab.FLD_TAB_NAME],i=Object.assign({},n);delete i.status;for(var s in i)i[s]||delete i[s];
//处理sysTab
t+="DELETE FROM `"+_.SysTab.TAB_NAME+"` WHERE `"+_.SysTab.FLD_TAB_NAME+"` = '"+o+"';\r\n",t+="INSERT INTO `"+_.SysTab.TAB_NAME+"` (`"+Object.keys(i).join("`,`")+"`)values ('"+Object.values(i).join("','")+"');\r\n\r\n",
//处理sysFld
t+="DELETE FROM `"+_.SysFld.TAB_NAME+"` WHERE `"+_.SysFld.FLD_TAB_NAME+"` = '"+o+"';\r\n",a.map(function(e){
//去掉Val（数据库中查询出来会存在）
for(var n in e)n.lastIndexOf("val")>0&&delete e[n];t+="INSERT INTO `"+_.SysFld.TAB_NAME+"` (`"+Object.keys(e).join("`,`")+"`)values ('"+Object.values(e).join("','")+"');\r\n"}),t+="\r\n",
//处理sysFldVal
t+="DELETE FROM `"+_.SysFldVal.TAB_NAME+"` WHERE `"+_.SysFldVal.FLD_TAB_NAME+"` = '"+o+"';\r\n",r.map(function(e){
//去掉多余字段值--id
var n=Object.assign({},e);delete n.id,t+="INSERT INTO `"+_.SysFldVal.TAB_NAME+"` (`"+Object.keys(n).join("`,`")+"`)values ('"+Object.values(n).join("','")+"');\r\n"}),t+="\r\n"});var n=new Blob([t],{type:"text/plain;charset=utf-8"}),a=(new Date).toLocaleDateString()+"-"+(1==e.length?e[0][_.SysTab.TAB_NAME][_.SysTab.FLD_TAB_NAME]:"");i.default.saveAs(n,a+".sql")},/**
     * 导出Tables
     * @param rows
     */
exportJsTable:function(e){if(e.some(function(e){return e.status==c.StatusNone}))return void r.notification.warning({message:"友情提示：",description:"未配置是不能导出SQL的"});var t=[];if(e.forEach(function(e){var n=e[_.SysTab.TAB_NAME],a=e[_.SysFld.TAB_NAME],r=e[_.SysFldVal.TAB_NAME]||[],o=n[_.SysTab.FLD_TAB_NAME],i=D._toDumpFirstUpper(o),s=Object.assign({},n);delete s.status;var u="export const "+i+" = {\r\n";
//SysTab
u+="\r\n\t//SysTab信息\r\n";for(var l in s)s[l]&&(u+="\t"+l.toUpperCase()+" : '"+s[l]+"',\r\n");
//SysFld
u+="\r\n\t//SysFld（FLD_字段大写）\r\n",a.forEach(function(e){var t=e[_.SysFld.FLD_COL_NAME];u+="\tFLD_"+t.toUpperCase()+" : '"+t+"',\r\n"}),
//SysFldVal
u+="\r\n\t//SysFldVal（FLDVAL_字段大写_显示值的中文简拼）\r\n",r.forEach(function(e){var t=e[_.SysFldVal.FLD_COL_NAME],n=e[_.SysFldVal.FLD_DISP_VAL],a=e[_.SysFldVal.FLD_DB_VAL];u+="\tFLDVAL_"+t.toUpperCase()+"_"+(0,f.zhToJp)(n)+" : "+a+",\r\n"}),u+="\r\n};",t.push({path:"src/config/tables",fileName:i+".js",code:u})}),t.length){var n=this.context.urlPath.config.exportTemplate;D._writeFile.call(this,n,t)}if(
//追加导出sysTables文件的配置
t=[],e.forEach(function(e){var n=e[_.SysTab.TAB_NAME][_.SysTab.FLD_TAB_NAME],a=D._toDumpFirstUpper(n);t.push({path:"src/config",fileName:"sysTables.js",code:d.Template.SysTables(a),tabName:a})}),t.length){var a=this.context.urlPath.config.appendTemplate;D._writeFile.call(this,a,t)}},/**
     * 导出服务端Tables
     * @param rows
     */
exportJavaTable:function(e){if(e.some(function(e){return e.status==c.StatusNone}))return void r.notification.warning({message:"友情提示：",description:"未配置是不能导出SQL的"});var t=[];if(e.forEach(function(e){var n=e[_.SysTab.TAB_NAME],a=e[_.SysFld.TAB_NAME],r=e[_.SysFldVal.TAB_NAME]||[],o=n[_.SysTab.FLD_TAB_NAME],i=D._toDumpFirstUpper(o),s=Object.assign({},n);delete s.status;var u="public class "+i+" {\r\n";
//SysTab
u+="\r\n\t//SysTab信息\r\n";for(var l in s)s[l]&&(u+="\tpublic static final String "+l.toUpperCase()+' = "'+s[l]+'";\r\n');
//SysFld
u+="\r\n\t//SysFld（FLD_字段大写）\r\n",a.forEach(function(e){var t=e[_.SysFld.FLD_COL_NAME];u+="\tpublic static final String FLD_"+t.toUpperCase()+' = "'+t+'";\r\n'}),
//SysFldVal
u+="\r\n\t//SysFldVal（FLDVAL_字段大写_显示值的中文简拼）\r\n",r.forEach(function(e){var t=e[_.SysFldVal.FLD_COL_NAME],n=e[_.SysFldVal.FLD_DISP_VAL],a=e[_.SysFldVal.FLD_DB_VAL];u+="\tpublic static final String FLDVAL_"+t.toUpperCase()+"_"+(0,f.zhToJp)(n)+' = "'+a+'";\r\n'}),u+="\r\n}",t.push({path:"src/config/tables",fileName:i+".java",code:u})}),t.length){var n=this.context.urlPath.config.exportTemplate;D._writeFile.call(this,n,t)}},/**
     * 导出SysEntity信息
     * @param rows
     */
exportEntity:function(e){if(e.some(function(e){return e.status==c.StatusNone}))return void r.notification.warning({message:"友情提示：",description:"未配置是不能导出SQL的"});var t=[];if(e.forEach(function(e){var n=e[_.SysTab.TAB_NAME],a=e[_.SysFld.TAB_NAME],r=e[_.SysFldVal.TAB_NAME]||[],o=n[_.SysTab.FLD_TAB_NAME],i=D._toDumpFirstUpper(o),s=Object.assign({},n);delete s.status;var u="export const "+i+" = {\r\n";
//SysTab
u+="\r\n\t//SysTab信息\r\n";for(var l in s)null!=s[l]&&void 0!=s[l]&&(u+="\t"+D._toDump(l)+" : '"+s[l]+"',\r\n");
//SysFld
u+="\r\n\t//SysFld信息\r\n",u+="\tsysFld: [\r\n",a.forEach(function(e,t){0==t&&(u+="\t{\r\n");for(var n in e)
//去掉Val（数据库中查询出来会存在）
n.lastIndexOf("val")>0&&delete e[n],null!=e[n]&&void 0!=e[n]&&(u+="\t\t"+D._toDump(n)+" : '"+e[n]+"',\r\n");t==a.length-1?u+="\t}],\r\n":u+="\t}, {\r\n"}),
//SysFldVal
u+="\r\n\t//SysFldVal信息\r\n",u+="\tsysFldVal: {\r\n";
//1.先根据fldName分组
var c={};r.forEach(function(e){var t=e[_.SysFldVal.FLD_COL_NAME];c[t]=c[t]||[],c[t].push(e)});for(var d in c)!function(e){var t=c[e].sort(function(e,t){return e[_.SysFldVal.FLD_DISP_ORDER]-t[_.SysFldVal.FLD_DISP_ORDER]});
//3.构建STR
u+="\t\t"+e+": [\r\n",t.forEach(function(e,n){0==n&&(u+="\t\t{\r\n");for(var a in e)null!=e[a]&&void 0!=e[a]&&("number"==typeof e[a]?u+="\t\t\t"+D._toDump(a)+" : "+e[a]+",\r\n":u+="\t\t\t"+D._toDump(a)+" : '"+e[a]+"',\r\n");n==t.length-1?u+="\t\t}],\r\n":u+="\t\t}, {\r\n"})}(d);u+="\t},",u+="\r\n};",t.push({path:"src/config/entitys",fileName:i+".js",code:u})}),t.length){var n=this.context.urlPath.config.exportTemplate;D._writeFile.call(this,n,t)}if(
//追加导出sysTables文件的配置
t=[],e.forEach(function(e){var n=e[_.SysTab.TAB_NAME][_.SysTab.FLD_TAB_NAME],a=D._toDumpFirstUpper(n);t.push({path:"src/config",fileName:"sysEntitys.js",code:d.Template.SysEntitys(a),tabName:a})}),t.length){var a=this.context.urlPath.config.appendTemplate;D._writeFile.call(this,a,t)}},/**
     * 编辑完成某行之后的回调行数
     * @param sysTab
     */
configTabSuccess:function(e){console.info(e),this.setState({sysTab:null,index:null}),this.refs[L].updateRow(e,this.state.index)},/**
     * @param name
     * @returns {*}
     * @private
     */
_toDumpFirstUpper:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=D._toDump(e);return t.length?t.charAt(0).toUpperCase()+t.substr(1):t},/**
     * 将一个名称名称（main_menu）转化为驼峰命名法
     * 规则：
     *      1.中间碰到下划线（_）的后面一个字母大写
     * @param name
     * @returns {*}
     * @private
     */
_toDump:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/\_(\w)/g,function(e,t){return t.toUpperCase()})},/**
     * 调用nodejs发布的FILE服务，将代码目录及文件写入到当前代码环境中
     * @param app
     * @param files [{path: 'src/app/user/page', fileName: 'userManage.js', code: '1234555'}]
     * @private
     */
_writeFile:function(e,t){(0,u.default)(l.FilePath+e,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Accept:"application/json;charset=utf-8"},body:JSON.stringify({files:t}),mode:"cors"}).then(function(e){if(e.ok)return e.json()}).then(function(e){var t=e.state,n=e.message;t?r.notification.success({message:"友情提示：",description:"导出成功！"}):r.notification.error({message:"友情提示：",description:n})}).catch(function(e){var t=e.message;r.notification.error({message:"友情提示：",description:t})})}}},/***/
305:/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});/**
 * Created by Suger on 2018/4/8.
 */
t.Template={SysEntitys:function(e){return"\nimport {"+e+"} from './entitys/"+e+"';\nSysEntitys["+e+".majorType] = SysEntitys["+e+".majorType] || {};\nSysEntitys["+e+".majorType]["+e+".minorType] = "+e+";\n"},SysTables:function(e){return"\r\nexport * from './tables/"+e+"';"}}},/***/
306:/***/
function(e,t,n){"use strict";function a(e){for(var t=e.replace(/ /g,""),n=t.length,a="",r=new RegExp("[a-zA-Z0-9- ]"),i=0;i<n;i++){var u=t.substr(i,1),l=o(u,s);r.test(u)?a+=u.substr(0,1):!1!==l&&(a+=l.substr(0,1))}return a}function r(e){for(var t=e.length,n="",a=new RegExp("[a-zA-Z0-9- ]"),r=0;r<t;r++){var i=e.substr(r,1),u=o(i,s);a.test(i)?n+=i:!1!==u&&(n+=u)}for(n=n.replace(/ /g,"-");n.indexOf("--")>0;)n=n.replace("--","-");return n}function o(e,t){for(var n in s)if(-1!=s[n].indexOf(e))return i(n);return!1}function i(e){if(e.length>0){return e.substr(0,1).toUpperCase()+e.substr(1,e.length)}}Object.defineProperty(t,"__esModule",{value:!0});/**
 * Created by Suger on 2018/4/3.
 */
var s={a:"啊阿锕",ai:"埃挨哎唉哀皑癌蔼矮艾碍爱隘诶捱嗳嗌嫒瑷暧砹锿霭",an:"鞍氨安俺按暗岸胺案谙埯揞犴庵桉铵鹌顸黯",ang:"肮昂盎",ao:"凹敖熬翱袄傲奥懊澳坳拗嗷噢岙廒遨媪骜聱螯鏊鳌鏖",ba:"芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸茇菝萆捭岜灞杷钯粑鲅魃",bai:"白柏百摆佰败拜稗薜掰鞴",ban:"斑班搬扳般颁板版扮拌伴瓣半办绊阪坂豳钣瘢癍舨",bang:"邦帮梆榜膀绑棒磅蚌镑傍谤蒡螃",bao:"苞胞包褒雹保堡饱宝抱报暴豹鲍爆勹葆宀孢煲鸨褓趵龅",bo:"剥薄玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳亳蕃啵饽檗擘礴钹鹁簸跛",bei:"杯碑悲卑北辈背贝钡倍狈备惫焙被孛陂邶埤蓓呗怫悖碚鹎褙鐾",ben:"奔苯本笨畚坌锛",beng:"崩绷甭泵蹦迸唪嘣甏",bi:"逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛匕仳俾芘荜荸吡哔狴庳愎滗濞弼妣婢嬖璧贲畀铋秕裨筚箅篦舭襞跸髀",bian:"鞭边编贬扁便变卞辨辩辫遍匾弁苄忭汴缏煸砭碥稹窆蝙笾鳊",biao:"标彪膘表婊骠飑飙飚灬镖镳瘭裱鳔",bie:"鳖憋别瘪蹩鳘",bin:"彬斌濒滨宾摈傧浜缤玢殡膑镔髌鬓",bing:"兵冰柄丙秉饼炳病并禀邴摒绠枋槟燹",bu:"捕卜哺补埠不布步簿部怖拊卟逋瓿晡钚醭",ca:"擦嚓礤",cai:"猜裁材才财睬踩采彩菜蔡",can:"餐参蚕残惭惨灿骖璨粲黪",cang:"苍舱仓沧藏伧",cao:"操糙槽曹草艹嘈漕螬艚",ce:"厕策侧册测刂帻恻",ceng:"层蹭噌",cha:"插叉茬茶查碴搽察岔差诧猹馇汊姹杈楂槎檫钗锸镲衩",chai:"拆柴豺侪茈瘥虿龇",chan:"搀掺蝉馋谗缠铲产阐颤冁谄谶蒇廛忏潺澶孱羼婵嬗骣觇禅镡裣蟾躔",chang:"昌猖场尝常长偿肠厂敞畅唱倡伥鬯苌菖徜怅惝阊娼嫦昶氅鲳",chao:"超抄钞朝嘲潮巢吵炒怊绉晁耖",che:"车扯撤掣彻澈坼屮砗",chen:"郴臣辰尘晨忱沉陈趁衬称谌抻嗔宸琛榇肜胂碜龀",cheng:"撑城橙成呈乘程惩澄诚承逞骋秤埕嵊徵浈枨柽樘晟塍瞠铖裎蛏酲",chi:"吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽傺墀芪茌搋叱哧啻嗤彳饬沲媸敕胝眙眵鸱瘛褫蚩螭笞篪豉踅踟魑",chong:"充冲虫崇宠茺忡憧铳艟",chou:"抽酬畴踌稠愁筹仇绸瞅丑俦圳帱惆溴妯瘳雠鲋",chu:"臭初出橱厨躇锄雏滁除楚础储矗搐触处亍刍憷绌杵楮樗蜍蹰黜",chuan:"揣川穿椽传船喘串掾舛惴遄巛氚钏镩舡",chuang:"疮窗幢床闯创怆",chui:"吹炊捶锤垂陲棰槌",chun:"春椿醇唇淳纯蠢促莼沌肫朐鹑蝽",chuo:"戳绰蔟辶辍镞踔龊",ci:"疵茨磁雌辞慈瓷词此刺赐次荠呲嵯鹚螅糍趑",cong:"聪葱囱匆从丛偬苁淙骢琮璁枞",cu:"凑粗醋簇猝殂蹙",cuan:"蹿篡窜汆撺昕爨",cui:"摧崔催脆瘁粹淬翠萃悴璀榱隹",cun:"村存寸磋忖皴",cuo:"撮搓措挫错厝脞锉矬痤鹾蹉躜",da:"搭达答瘩打大耷哒嗒怛妲疸褡笪靼鞑",dai:"呆歹傣戴带殆代贷袋待逮怠埭甙呔岱迨逯骀绐玳黛",dan:"耽担丹单郸掸胆旦氮但惮淡诞弹蛋亻儋卩萏啖澹檐殚赕眈瘅聃箪",dang:"当挡党荡档谠凼菪宕砀铛裆",dao:"刀捣蹈倒岛祷导到稻悼道盗叨啁忉洮氘焘忑纛",de:"德得的锝",deng:"蹬灯登等瞪凳邓噔嶝戥磴镫簦",di:"堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔氐籴诋谛邸坻莜荻嘀娣柢棣觌砥碲睇镝羝骶",dian:"颠掂滇碘点典靛垫电佃甸店惦奠淀殿丶阽坫埝巅玷癜癫簟踮",diao:"碉叼雕凋刁掉吊钓调轺铞蜩粜貂",die:"跌爹碟蝶迭谍叠佚垤堞揲喋渫轶牒瓞褶耋蹀鲽鳎",ding:"丁盯叮钉顶鼎锭定订丢仃啶玎腚碇町铤疔耵酊",dong:"东冬董懂动栋侗恫冻洞垌咚岽峒夂氡胨胴硐鸫",dou:"兜抖斗陡豆逗痘蔸钭窦窬蚪篼酡",du:"都督毒犊独读堵睹赌杜镀肚度渡妒芏嘟渎椟橐牍蠹笃髑黩",duan:"端短锻段断缎彖椴煅簖",dui:"堆兑队对怼憝碓",dun:"墩吨蹲敦顿囤钝盾遁炖砘礅盹镦趸",duo:"掇哆多夺垛躲朵跺舵剁惰堕咄哚缍柁铎裰踱",e:"蛾峨鹅俄额讹娥恶厄扼遏鄂饿噩谔垩垭苊莪萼呃愕屙婀轭曷腭硪锇锷鹗颚鳄",en:"恩蒽摁唔嗯",er:"而儿耳尔饵洱二贰迩珥铒鸸鲕",fa:"发罚筏伐乏阀法珐垡砝",fan:"藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛蘩幡犭梵攵燔畈蹯",fang:"坊芳方肪房防妨仿访纺放匚邡彷钫舫鲂",fei:"菲非啡飞肥匪诽吠肺废沸费芾狒悱淝妃绋绯榧腓斐扉祓砩镄痱蜚篚翡霏鲱",fen:"芬酚吩氛分纷坟焚汾粉奋份忿愤粪偾瀵棼愍鲼鼢",feng:"丰封枫蜂峰锋风疯烽逢冯缝讽奉凤俸酆葑沣砜",fu:"佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐匐凫郛芙苻茯莩菔呋幞滏艴孚驸绂桴赙黻黼罘稃馥虍蚨蜉蝠蝮麸趺跗鳆",ga:"噶嘎蛤尬呷尕尜旮钆",gai:"该改概钙盖溉丐陔垓戤赅胲",gan:"干甘杆柑竿肝赶感秆敢赣坩苷尴擀泔淦澉绀橄旰矸疳酐",gang:"冈刚钢缸肛纲岗港戆罡颃筻",gong:"杠工攻功恭龚供躬公宫弓巩汞拱贡共蕻廾咣珙肱蚣蛩觥",gao:"篙皋高膏羔糕搞镐稿告睾诰郜蒿藁缟槔槁杲锆",ge:"哥歌搁戈鸽胳疙割革葛格阁隔铬个各鬲仡哿塥嗝纥搿膈硌铪镉袼颌虼舸骼髂",gei:"给",gen:"根跟亘茛哏艮",geng:"耕更庚羹埂耿梗哽赓鲠",gou:"钩勾沟苟狗垢构购够佝诟岣遘媾缑觏彀鸲笱篝鞲",gu:"辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇嘏诂菰哌崮汩梏轱牯牿胍臌毂瞽罟钴锢瓠鸪鹄痼蛄酤觚鲴骰鹘",gua:"刮瓜剐寡挂褂卦诖呱栝鸹",guai:"乖拐怪哙",guan:"棺关官冠观管馆罐惯灌贯倌莞掼涫盥鹳鳏",guang:"光广逛犷桄胱疒",gui:"瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽匦刿庋宄妫桧炅晷皈簋鲑鳜",gun:"辊滚棍丨衮绲磙鲧",guo:"锅郭国果裹过馘蠃埚掴呙囗帼崞猓椁虢锞聒蜮蜾蝈",ha:"哈",hai:"骸孩海氦亥害骇咴嗨颏醢",han:"酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉邗菡撖阚瀚晗焓颔蚶鼾",hen:"夯痕很狠恨",hang:"杭航沆绗珩桁",hao:"壕嚎豪毫郝好耗号浩薅嗥嚆濠灏昊皓颢蚝",he:"呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺诃劾壑藿嗑嗬阖盍蚵翮",hei:"嘿黑",heng:"哼亨横衡恒訇蘅",hong:"轰哄烘虹鸿洪宏弘红黉讧荭薨闳泓",hou:"喉侯猴吼厚候后堠後逅瘊篌糇鲎骺",hu:"呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户冱唿囫岵猢怙惚浒滹琥槲轷觳烀煳戽扈祜鹕鹱笏醐斛",hua:"花哗华猾滑画划化话劐浍骅桦铧稞",huai:"槐徊怀淮坏还踝",huan:"欢环桓缓换患唤痪豢焕涣宦幻郇奂垸擐圜洹浣漶寰逭缳锾鲩鬟",huang:"荒慌黄磺蝗簧皇凰惶煌晃幌恍谎隍徨湟潢遑璜肓癀蟥篁鳇",hui:"灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘诙茴荟蕙哕喙隳洄彗缋珲晖恚虺蟪麾",hun:"荤昏婚魂浑混诨馄阍溷缗",huo:"豁活伙火获或惑霍货祸攉嚯夥钬锪镬耠蠖",ji:"击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪居丌乩剞佶佴脔墼芨芰萁蒺蕺掎叽咭哜唧岌嵴洎彐屐骥畿玑楫殛戟戢赍觊犄齑矶羁嵇稷瘠瘵虮笈笄暨跻跽霁鲚鲫髻麂",jia:"嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁伽郏拮岬浃迦珈戛胛恝铗镓痂蛱笳袈跏",jian:"歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僭谏谫菅蒹搛囝湔蹇謇缣枧柙楗戋戬牮犍毽腱睑锏鹣裥笕箴翦趼踺鲣鞯",jiang:"僵姜将浆江疆蒋桨奖讲匠酱降茳洚绛缰犟礓耩糨豇",jiao:"蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫佼僬茭挢噍峤徼姣纟敫皎鹪蛟醮跤鲛",jie:"窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届偈讦诘喈嗟獬婕孑桀獒碣锴疖袷颉蚧羯鲒骱髫",jin:"巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽卺荩堇噤馑廑妗缙瑾槿赆觐钅锓衿矜",jing:"劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净刭儆阱菁獍憬泾迳弪婧肼胫腈旌",jiong:"炯窘冂迥扃",jiu:"揪究纠玖韭久灸九酒厩救旧臼舅咎就疚僦啾阄柩桕鹫赳鬏",ju:"鞠拘狙疽驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧倨讵苣苴莒掬遽屦琚枸椐榘榉橘犋飓钜锔窭裾趄醵踽龃雎鞫",juan:"捐鹃娟倦眷卷绢鄄狷涓桊蠲锩镌隽",jue:"撅攫抉掘倔爵觉决诀绝厥劂谲矍蕨噘崛獗孓珏桷橛爝镢蹶觖",jun:"均菌钧军君峻俊竣浚郡骏捃狻皲筠麇",ka:"喀咖卡佧咔胩",ke:"咯坷苛柯棵磕颗科壳咳可渴克刻客课岢恪溘骒缂珂轲氪瞌钶疴窠蝌髁",kai:"开揩楷凯慨剀垲蒈忾恺铠锎",kan:"刊堪勘坎砍看侃凵莰莶戡龛瞰",kang:"康慷糠扛抗亢炕坑伉闶钪",kao:"考拷烤靠尻栲犒铐",ken:"肯啃垦恳垠裉颀",keng:"吭忐铿",kong:"空恐孔控倥崆箜",kou:"抠口扣寇芤蔻叩眍筘",ku:"枯哭窟苦酷库裤刳堀喾绔骷",kua:"夸垮挎跨胯侉",kuai:"块筷侩快蒯郐蒉狯脍",kuan:"宽款髋",kuang:"匡筐狂框矿眶旷况诓诳邝圹夼哐纩贶",kui:"亏盔岿窥葵奎魁傀馈愧溃馗匮夔隗揆喹喟悝愦阕逵暌睽聩蝰篑臾跬",kun:"坤昆捆困悃阃琨锟醌鲲髡",kuo:"括扩廓阔蛞",la:"垃拉喇蜡腊辣啦剌摺邋旯砬瘌",lai:"莱来赖崃徕涞濑赉睐铼癞籁",lan:"蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥啉岚懔漤榄斓罱镧褴",lang:"琅榔狼廊郎朗浪莨蒗啷阆锒稂螂",lao:"捞劳牢老佬姥酪烙涝唠崂栳铑铹痨醪",le:"勒乐肋仂叻嘞泐鳓",lei:"雷镭蕾磊累儡垒擂类泪羸诔荽咧漯嫘缧檑耒酹",ling:"棱冷拎玲菱零龄铃伶羚凌灵陵岭领另令酃塄苓呤囹泠绫柃棂瓴聆蛉翎鲮",leng:"楞愣",li:"厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俪俚郦坜苈莅蓠藜捩呖唳喱猁溧澧逦娌嫠骊缡珞枥栎轹戾砺詈罹锂鹂疠疬蛎蜊蠡笠篥粝醴跞雳鲡鳢黧",lian:"俩联莲连镰廉怜涟帘敛脸链恋炼练挛蔹奁潋濂娈琏楝殓臁膦裢蠊鲢",liang:"粮凉梁粱良两辆量晾亮谅墚椋踉靓魉",liao:"撩聊僚疗燎寥辽潦了撂镣廖料蓼尥嘹獠寮缭钌鹩耢",lie:"列裂烈劣猎冽埒洌趔躐鬣",lin:"琳林磷霖临邻鳞淋凛赁吝蔺嶙廪遴檩辚瞵粼躏麟",liu:"溜琉榴硫馏留刘瘤流柳六抡偻蒌泖浏遛骝绺旒熘锍镏鹨鎏",long:"龙聋咙笼窿隆垄拢陇弄垅茏泷珑栊胧砻癃",lou:"楼娄搂篓漏陋喽嵝镂瘘耧蝼髅",lu:"芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮垆摅撸噜泸渌漉璐栌橹轳辂辘氇胪镥鸬鹭簏舻鲈",lv:"驴吕铝侣旅履屡缕虑氯律率滤绿捋闾榈膂稆褛",luan:"峦孪滦卵乱栾鸾銮",lue:"掠略锊",lun:"轮伦仑沦纶论囵",luo:"萝螺罗逻锣箩骡裸落洛骆络倮荦摞猡泺椤脶镙瘰雒",ma:"妈麻玛码蚂马骂嘛吗唛犸嬷杩麽",mai:"埋买麦卖迈脉劢荬咪霾",man:"瞒馒蛮满蔓曼慢漫谩墁幔缦熳镘颟螨鳗鞔",mang:"芒茫盲忙莽邙漭朦硭蟒",meng:"氓萌蒙檬盟锰猛梦孟勐甍瞢懵礞虻蜢蠓艋艨黾",miao:"猫苗描瞄藐秒渺庙妙喵邈缈缪杪淼眇鹋蜱",mao:"茅锚毛矛铆卯茂冒帽貌贸侔袤勖茆峁瑁昴牦耄旄懋瞀蛑蝥蟊髦",me:"么",mei:"玫枚梅酶霉煤没眉媒镁每美昧寐妹媚坶莓嵋猸浼湄楣镅鹛袂魅",men:"门闷们扪玟焖懑钔",mi:"眯醚靡糜迷谜弥米秘觅泌蜜密幂芈冖谧蘼嘧猕獯汨宓弭脒敉糸縻麋",mian:"棉眠绵冕免勉娩缅面沔湎腼眄",mie:"蔑灭咩蠛篾",min:"民抿皿敏悯闽苠岷闵泯珉",ming:"明螟鸣铭名命冥茗溟暝瞑酩",miu:"谬",mo:"摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谟茉蓦馍嫫镆秣瘼耱蟆貊貘",mou:"谋牟某厶哞婺眸鍪",mu:"拇牡亩姆母墓暮幕募慕木目睦牧穆仫苜呒沐毪钼",na:"拿哪呐钠那娜纳内捺肭镎衲箬",nai:"氖乃奶耐奈鼐艿萘柰",nan:"南男难囊喃囡楠腩蝻赧",nao:"挠脑恼闹孬垴猱瑙硇铙蛲",ne:"淖呢讷",nei:"馁",nen:"嫩能枘恁",ni:"妮霓倪泥尼拟你匿腻逆溺伲坭猊怩滠昵旎祢慝睨铌鲵",nian:"蔫拈年碾撵捻念廿辇黏鲇鲶",niang:"娘酿",niao:"鸟尿茑嬲脲袅",nie:"捏聂孽啮镊镍涅乜陧蘖嗫肀颞臬蹑",nin:"您柠",ning:"狞凝宁拧泞佞蓥咛甯聍",niu:"牛扭钮纽狃忸妞蚴",nong:"脓浓农侬",nu:"奴努怒呶帑弩胬孥驽",nv:"女恧钕衄",nuan:"暖",nuenue:"虐",nue:"疟谑",nuo:"挪懦糯诺傩搦喏锘",ou:"哦欧鸥殴藕呕偶沤怄瓯耦",pa:"啪趴爬帕怕琶葩筢",pai:"拍排牌徘湃派俳蒎",pan:"攀潘盘磐盼畔判叛爿泮袢襻蟠蹒",pang:"乓庞旁耪胖滂逄",pao:"抛咆刨炮袍跑泡匏狍庖脬疱",pei:"呸胚培裴赔陪配佩沛掊辔帔淠旆锫醅霈",pen:"喷盆湓",peng:"砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯堋嘭怦蟛",pi:"砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬丕陴邳郫圮鼙擗噼庀媲纰枇甓睥罴铍痦癖疋蚍貔",pian:"篇偏片骗谝骈犏胼褊翩蹁",piao:"飘漂瓢票剽嘌嫖缥殍瞟螵",pie:"撇瞥丿苤氕",pin:"拼频贫品聘拚姘嫔榀牝颦",ping:"乒坪苹萍平凭瓶评屏俜娉枰鲆",po:"坡泼颇婆破魄迫粕叵鄱溥珀钋钷皤笸",pou:"剖裒踣",pu:"扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑匍噗濮璞氆镤镨蹼",qi:"期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫亟亓圻芑萋葺嘁屺岐汔淇骐绮琪琦杞桤槭欹祺憩碛蛴蜞綦綮趿蹊鳍麒",qia:"掐恰洽葜",qian:"牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉佥阡芊芡荨掮岍悭慊骞搴褰缱椠肷愆钤虔箝",qiang:"枪呛腔羌墙蔷强抢嫱樯戗炝锖锵镪襁蜣羟跫跄",qiao:"橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍劁诮谯荞愀憔缲樵毳硗跷鞒",qie:"切茄且怯窃郄唼惬妾挈锲箧",qin:"钦侵亲秦琴勤芹擒禽寝沁芩蓁蕲揿吣嗪噙溱檎螓衾",qing:"青轻氢倾卿清擎晴氰情顷请庆倩苘圊檠磬蜻罄箐謦鲭黥",qiong:"琼穷邛茕穹筇銎",qiu:"秋丘邱球求囚酋泅俅氽巯艽犰湫逑遒楸赇鸠虬蚯蝤裘糗鳅鼽",qu:"趋区蛆曲躯屈驱渠取娶龋趣去诎劬蕖蘧岖衢阒璩觑氍祛磲癯蛐蠼麴瞿黢",quan:"圈颧权醛泉全痊拳犬券劝诠荃獾悛绻辁畎铨蜷筌鬈",que:"缺炔瘸却鹊榷确雀阙悫",qun:"裙群逡",ran:"然燃冉染苒髯",rang:"瓤壤攘嚷让禳穰",rao:"饶扰绕荛娆桡",ruo:"惹若弱",re:"热偌",ren:"壬仁人忍韧任认刃妊纫仞荏葚饪轫稔衽",reng:"扔仍",ri:"日",rong:"戎茸蓉荣融熔溶容绒冗嵘狨缛榕蝾",rou:"揉柔肉糅蹂鞣",ru:"茹蠕儒孺如辱乳汝入褥蓐薷嚅洳溽濡铷襦颥",ruan:"软阮朊",rui:"蕊瑞锐芮蕤睿蚋",run:"闰润",sa:"撒洒萨卅仨挲飒",sai:"腮鳃塞赛噻",san:"三叁伞散彡馓氵毵糁霰",sang:"桑嗓丧搡磉颡",sao:"搔骚扫嫂埽臊瘙鳋",se:"瑟色涩啬铩铯穑",sen:"森",seng:"僧",sha:"莎砂杀刹沙纱傻啥煞脎歃痧裟霎鲨",shai:"筛晒酾",shan:"珊苫杉山删煽衫闪陕擅赡膳善汕扇缮剡讪鄯埏芟潸姗骟膻钐疝蟮舢跚鳝",shang:"墒伤商赏晌上尚裳垧绱殇熵觞",shao:"梢捎稍烧芍勺韶少哨邵绍劭苕潲蛸笤筲艄",she:"奢赊蛇舌舍赦摄射慑涉社设厍佘猞畲麝",shen:"砷申呻伸身深娠绅神沈审婶甚肾慎渗诜谂吲哂渖椹矧蜃",sheng:"声生甥牲升绳省盛剩胜圣丞渑媵眚笙",shi:"师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试谥埘莳蓍弑唑饣轼耆贳炻礻铈铊螫舐筮豕鲥鲺",shou:"收手首守寿授售受瘦兽扌狩绶艏",shu:"蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕倏塾菽忄沭涑澍姝纾毹腧殳镯秫鹬",shua:"刷耍唰涮",shuai:"摔衰甩帅蟀",shuan:"栓拴闩",shuang:"霜双爽孀",shui:"谁水睡税",shun:"吮瞬顺舜恂",shuo:"说硕朔烁蒴搠嗍濯妁槊铄",si:"斯撕嘶思私司丝死肆寺嗣四伺似饲巳厮俟兕菥咝汜泗澌姒驷缌祀祠锶鸶耜蛳笥",song:"松耸怂颂送宋讼诵凇菘崧嵩忪悚淞竦",sou:"搜艘擞嗽叟嗖嗾馊溲飕瞍锼螋",su:"苏酥俗素速粟僳塑溯宿诉肃夙谡蔌嗉愫簌觫稣",suan:"酸蒜算",sui:"虽隋随绥髓碎岁穗遂隧祟蓑冫谇濉邃燧眭睢",sun:"孙损笋荪狲飧榫跣隼",suo:"梭唆缩琐索锁所唢嗦娑桫睃羧",ta:"塌他它她塔獭挞蹋踏闼溻遢榻沓",tai:"胎苔抬台泰酞太态汰邰薹肽炱钛跆鲐",tan:"坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭郯蕈昙钽锬覃",tang:"汤塘搪堂棠膛唐糖傥饧溏瑭铴镗耥螗螳羰醣",thang:"倘躺淌",theng:"趟烫",tao:"掏涛滔绦萄桃逃淘陶讨套挑鼗啕韬饕",te:"特",teng:"藤腾疼誊滕",ti:"梯剔踢锑提题蹄啼体替嚏惕涕剃屉荑悌逖绨缇鹈裼醍",tian:"天添填田甜恬舔腆掭忝阗殄畋钿蚺",tiao:"条迢眺跳佻祧铫窕龆鲦",tie:"贴铁帖萜餮",ting:"厅听烃汀廷停亭庭挺艇莛葶婷梃蜓霆",tong:"通桐酮瞳同铜彤童桶捅筒统痛佟僮仝茼嗵恸潼砼",tou:"偷投头透亠",tu:"凸秃突图徒途涂屠土吐兔堍荼菟钍酴",tuan:"湍团疃",tui:"推颓腿蜕褪退忒煺",tun:"吞屯臀饨暾豚窀",tuo:"拖托脱鸵陀驮驼椭妥拓唾乇佗坨庹沱柝砣箨舄跎鼍",wa:"挖哇蛙洼娃瓦袜佤娲腽",wai:"歪外",wan:"豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕剜芄苋菀纨绾琬脘畹蜿箢",wang:"汪王亡枉网往旺望忘妄罔尢惘辋魍",wei:"威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫倭偎诿隈葳薇帏帷崴嵬猥猬闱沩洧涠逶娓玮韪軎炜煨熨痿艉鲔",wen:"瘟温蚊文闻纹吻稳紊问刎愠阌汶璺韫殁雯",weng:"嗡翁瓮蓊蕹",wo:"挝蜗涡窝我斡卧握沃莴幄渥杌肟龌",wu:"巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误兀仵阢邬圬芴庑怃忤浯寤迕妩骛牾焐鹉鹜蜈鋈鼯",xi:"昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细僖兮隰郗茜葸蓰奚唏徙饩阋浠淅屣嬉玺樨曦觋欷熹禊禧钸皙穸蜥蟋舾羲粞翕醯鼷",xia:"瞎虾匣霞辖暇峡侠狭下厦夏吓掀葭嗄狎遐瑕硖瘕罅黠",xian:"锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线冼藓岘猃暹娴氙祆鹇痫蚬筅籼酰跹",xiang:"相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象芗葙饷庠骧缃蟓鲞飨",xiao:"萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效哓咻崤潇逍骁绡枭枵筱箫魈",xie:"楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑偕亵勰燮薤撷廨瀣邂绁缬榭榍歙躞",xin:"薪芯锌欣辛新忻心信衅囟馨莘歆铽鑫",xing:"星腥猩惺兴刑型形邢行醒幸杏性姓陉荇荥擤悻硎",xiong:"兄凶胸匈汹雄熊芎",xiu:"休修羞朽嗅锈秀袖绣莠岫馐庥鸺貅髹",xu:"墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续讴诩圩蓿怵洫溆顼栩煦砉盱胥糈醑",xuan:"轩喧宣悬旋玄选癣眩绚儇谖萱揎馔泫洵渲漩璇楦暄炫煊碹铉镟痃",xue:"靴薛学穴雪血噱泶鳕",xun:"勋熏循旬询寻驯巡殉汛训讯逊迅巽埙荀薰峋徇浔曛窨醺鲟",ya:"压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶伢揠吖岈迓娅琊桠氩砑睚痖",yan:"焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验厣靥赝俨偃兖讠谳郾鄢芫菸崦恹闫阏洇湮滟妍嫣琰晏胭腌焱罨筵酽魇餍鼹",yang:"殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾徉怏泱炀烊恙蛘鞅",yao:"邀腰妖瑶摇尧遥窑谣姚咬舀药要耀夭爻吆崾徭瀹幺珧杳曜肴鹞窈繇鳐",ye:"椰噎耶爷野冶也页掖业叶曳腋夜液谒邺揶馀晔烨铘",yi:"一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎刈劓佾诒圪圯埸懿苡薏弈奕挹弋呓咦咿噫峄嶷猗饴怿怡悒漪迤驿缢殪贻旖熠钇镒镱痍瘗癔翊衤蜴舣羿翳酏黟",yin:"茵荫因殷音阴姻吟银淫寅饮尹引隐印胤鄞堙茚喑狺夤氤铟瘾蚓霪龈",ying:"英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映嬴郢茔莺萦撄嘤膺滢潆瀛瑛璎楹鹦瘿颍罂",yo:"哟唷",yong:"拥佣臃痈庸雍踊蛹咏泳涌永恿勇用俑壅墉慵邕镛甬鳙饔",you:"幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼卣攸侑莸呦囿宥柚猷牖铕疣蝣鱿黝鼬",yu:"迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭禺毓伛俣谀谕萸蓣揄喁圄圉嵛狳饫庾阈妪妤纡瑜昱觎腴欤於煜燠聿钰鹆瘐瘀窳蝓竽舁雩龉",yuan:"鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院塬沅媛瑗橼爰眢鸢螈鼋",yue:"曰约越跃钥岳粤月悦阅龠樾刖钺",yun:"耘云郧匀陨允运蕴酝晕韵孕郓芸狁恽纭殒昀氲",za:"匝砸杂拶咂",zai:"栽哉灾宰载再在咱崽甾",zan:"攒暂赞瓒昝簪糌趱錾",zang:"赃脏葬奘戕臧",zao:"遭糟凿藻枣早澡蚤躁噪造皂灶燥唣缫",ze:"责择则泽仄赜啧迮昃笮箦舴",zei:"贼",zen:"怎谮",zeng:"增憎曾赠缯甑罾锃",zha:"扎喳渣札轧铡闸眨栅榨咋乍炸诈揸吒咤哳怍砟痄蚱齄",zhai:"摘斋宅窄债寨砦",zhan:"瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽谵搌旃",zhang:"樟章彰漳张掌涨杖丈帐账仗胀瘴障仉鄣幛嶂獐嫜璋蟑",zhao:"招昭找沼赵照罩兆肇召爪诏棹钊笊",zhe:"遮折哲蛰辙者锗蔗这浙谪陬柘辄磔鹧褚蜇赭",zhen:"珍斟真甄砧臻贞针侦枕疹诊震振镇阵缜桢榛轸赈胗朕祯畛鸩",zheng:"蒸挣睁征狰争怔整拯正政帧症郑证诤峥钲铮筝",zhi:"芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒卮陟郅埴芷摭帙忮彘咫骘栉枳栀桎轵轾攴贽膣祉祗黹雉鸷痣蛭絷酯跖踬踯豸觯",zhong:"中盅忠钟衷终种肿重仲众冢锺螽舂舯踵",zhou:"舟周州洲诌粥轴肘帚咒皱宙昼骤啄着倜诹荮鬻纣胄碡籀舳酎鲷",zhu:"珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻伫侏邾苎茱洙渚潴驺杼槠橥炷铢疰瘃蚰竺箸翥躅麈",zhua:"抓",zhuai:"拽",zhuan:"专砖转撰赚篆抟啭颛",zhuang:"桩庄装妆撞壮状丬",zhui:"椎锥追赘坠缀萑骓缒",zhun:"谆准",zhuo:"捉拙卓桌琢茁酌灼浊倬诼廴蕞擢啜浞涿杓焯禚斫",zi:"兹咨资姿滋淄孜紫仔籽滓子自渍字谘嵫姊孳缁梓辎赀恣眦锱秭耔笫粢觜訾鲻髭",zong:"鬃棕踪宗综总纵腙粽",zou:"邹走奏揍鄹鲰",zu:"租足卒族祖诅阻组俎菹啐徂驵蹴",zuan:"钻纂攥缵",zui:"嘴醉最罪",zun:"尊遵撙樽鳟",zuo:"昨左佐柞做作坐座阝阼胙祚酢",cou:"薮楱辏腠",nang:"攮哝囔馕曩",o:"喔",dia:"嗲",chuai:"嘬膪踹",cen:"岑涔",diu:"铥",nou:"耨",fou:"缶",bia:"髟"};t.zhToJp=a,t.zhToQp=r},/***/
307:/***/
function(e,t,n){
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var a=n(308);"string"==typeof a&&(a=[[e.i,a,""]]);
// Prepare cssTransformation
var r={hmr:!0};r.transform=void 0;
// add the styles to the DOM
n(4)(a,r);a.locals&&(e.exports=a.locals)},/***/
308:/***/
function(e,t,n){t=e.exports=n(3)(void 0),
// imports
// module
t.push([e.i,"\r\n.ca-tablesmanage-body {\r\n    margin: 20px;\r\n    padding: 20px;\r\n    background-color: white;\r\n}",""])}});