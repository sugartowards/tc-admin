/**
 * Created by Suger on 2018/3/27.
 */
import {notification} from 'antd';
import FileSaver from 'file-saver';
import fetch from 'isomorphic-fetch';
import {FilePath} from '../../../../config/pathCfg';
import {SysTab, SysFld, SysFldVal} from '../../../../config/sysTables';
import {StatusNone} from '../page/tablesManage';
import {Template} from '../config/tablesManage';
import {zhToJp} from './zhJpTransmit';

const NextLineStr = '\r\n';//换行符号
const TabStr = '\t';//制表符号
const QuotesStr = '\`';//MYSQL的单引号
export const DataGridObj = 'dataGridObj';
export const TablesManageFunc = {

    /**
     * 查询按钮
     */
    queryClick: function (params) {
        this.refs[DataGridObj].loader(params);
    },

    /**
     * 编辑
     * @param rows
     * @param index
     */
    configTab: function (rows, index) {
        this.setState({sysTab: rows[0], index});
    },

    /**
     * 导出SQL
     * @param rows
     */
    exportSql: function (rows) {
        if (rows.some((row)=> row.status == StatusNone)) {
            notification.warning({
                message: '友情提示：',
                description: '未配置是不能导出SQL的',
            });
            return;
        }
        let sql = '';
        rows.map(row => {
            let sysTab = row[SysTab.TAB_NAME], sysFld = row[SysFld.TAB_NAME], sysFldVal = row[SysFldVal.TAB_NAME] || [];
            let tabName = sysTab[SysTab.FLD_TAB_NAME];
            //去掉多余字段值--status
            let newSysTab = Object.assign({}, sysTab);
            delete newSysTab.status;
            for (let key in newSysTab) {
                if(!newSysTab[key]){
                    delete newSysTab[key];
                }
            }
            //处理sysTab
            sql += `DELETE FROM ${QuotesStr}${SysTab.TAB_NAME}${QuotesStr} WHERE ${QuotesStr}${SysTab.FLD_TAB_NAME}${QuotesStr} = '${tabName}';${NextLineStr}`;
            sql += `INSERT INTO ${QuotesStr}${SysTab.TAB_NAME}${QuotesStr} (${QuotesStr}${Object.keys(newSysTab).join(`${QuotesStr},${QuotesStr}`)}${QuotesStr})values ('${Object.values(newSysTab).join(`','`)}');${NextLineStr}${NextLineStr}`;
            //处理sysFld
            sql += `DELETE FROM ${QuotesStr}${SysFld.TAB_NAME}${QuotesStr} WHERE ${QuotesStr}${SysFld.FLD_TAB_NAME}${QuotesStr} = '${tabName}';${NextLineStr}`;
            sysFld.map(fld => {
                //去掉Val（数据库中查询出来会存在）
                for (let key in fld) {
                    if(key.lastIndexOf('val') > 0){
                        delete fld[key];
                    }
                }
                sql += `INSERT INTO ${QuotesStr}${SysFld.TAB_NAME}${QuotesStr} (${QuotesStr}${Object.keys(fld).join(`${QuotesStr},${QuotesStr}`)}${QuotesStr})values ('${Object.values(fld).join(`','`)}');${NextLineStr}`;
            });
            sql += NextLineStr;
            //处理sysFldVal
            sql += `DELETE FROM ${QuotesStr}${SysFldVal.TAB_NAME}${QuotesStr} WHERE ${QuotesStr}${SysFldVal.FLD_TAB_NAME}${QuotesStr} = '${tabName}';${NextLineStr}`;
            sysFldVal.map(oldFldVal => {
                //去掉多余字段值--id
                let fldVal = Object.assign({}, oldFldVal);
                delete fldVal.id;
                sql += `INSERT INTO ${QuotesStr}${SysFldVal.TAB_NAME}${QuotesStr} (${QuotesStr}${Object.keys(fldVal).join(`${QuotesStr},${QuotesStr}`)}${QuotesStr})values ('${Object.values(fldVal).join(`','`)}');${NextLineStr}`;
            });
            sql += NextLineStr;
        });
        var blob = new Blob([sql], {type: "text/plain;charset=utf-8"});
        let fileNameStr = new Date().toLocaleDateString() + '-' + (rows.length == 1 ? rows[0][SysTab.TAB_NAME][SysTab.FLD_TAB_NAME] : '');
        FileSaver.saveAs(blob, `${fileNameStr}.sql`);
    },

    /**
     * 导出Tables
     * @param rows
     */
    exportJsTable: function (rows) {
        if (rows.some((row)=> row.status == StatusNone)) {
            notification.warning({
                message: '友情提示：',
                description: '未配置是不能导出SQL的',
            });
            return;
        }
        let files = [];
        rows.forEach(row => {
            let sysTab = row[SysTab.TAB_NAME], sysFld = row[SysFld.TAB_NAME], sysFldVal = row[SysFldVal.TAB_NAME] || [];
            let tabName = sysTab[SysTab.FLD_TAB_NAME];
            let tabNameUpper = TablesManageFunc._toDumpFirstUpper(tabName);
            //去掉多余字段值--status
            let newSysTab = Object.assign({}, sysTab);
            delete newSysTab.status;
            let codeStr = `export const ${tabNameUpper} = {${NextLineStr}`;
            //SysTab
            codeStr += `${NextLineStr}${TabStr}//SysTab信息${NextLineStr}`;
            for(let key in newSysTab){
                if(newSysTab[key]){
                    codeStr += `${TabStr}${key.toUpperCase()} : '${newSysTab[key]}',${NextLineStr}`;
                }
            }
            //SysFld
            codeStr += `${NextLineStr}${TabStr}//SysFld（FLD_字段大写）${NextLineStr}`;
            sysFld.forEach((fld) => {
                let key = fld[SysFld.FLD_COL_NAME];
                codeStr += `${TabStr}FLD_${key.toUpperCase()} : '${key}',${NextLineStr}`;
            });
            //SysFldVal
            codeStr += `${NextLineStr}${TabStr}//SysFldVal（FLDVAL_字段大写_显示值的中文简拼）${NextLineStr}`;
            sysFldVal.forEach((fldVal) => {
                let key = fldVal[SysFldVal.FLD_COL_NAME];
                let dispVal = fldVal[SysFldVal.FLD_DISP_VAL];
                let dbVal = fldVal[SysFldVal.FLD_DB_VAL];
                codeStr += `${TabStr}FLDVAL_${key.toUpperCase()}_${zhToJp(dispVal)} : ${dbVal},${NextLineStr}`;
            });
            codeStr += `${NextLineStr}};`;
            files.push({path: `src/config/tables`, fileName: `${tabNameUpper}.js`, code: codeStr});
        });
        if(files.length){
            let app = this.context.urlPath.config.exportTemplate;
            TablesManageFunc._writeFile.call(this, app, files);
        }
        //追加导出sysTables文件的配置
        files = [];
        rows.forEach((row) => {
            let tabName = row[SysTab.TAB_NAME][SysTab.FLD_TAB_NAME];
            let tabNameUpper = TablesManageFunc._toDumpFirstUpper(tabName);
            files.push({path: `src/config`,
                        fileName: `sysTables.js`,
                        code: Template.SysTables(tabNameUpper),
                        tabName: tabNameUpper});
        });
        if(files.length){
            let app = this.context.urlPath.config.appendTemplate;
            TablesManageFunc._writeFile.call(this, app, files);
        }
    },

    /**
     * 导出服务端Tables
     * @param rows
     */
    exportJavaTable: function (rows) {
        if (rows.some((row)=> row.status == StatusNone)) {
            notification.warning({
                message: '友情提示：',
                description: '未配置是不能导出SQL的',
            });
            return;
        }
        let files = [];
        rows.forEach(row => {
            let sysTab = row[SysTab.TAB_NAME], sysFld = row[SysFld.TAB_NAME], sysFldVal = row[SysFldVal.TAB_NAME] || [];
            let tabName = sysTab[SysTab.FLD_TAB_NAME];
            let tabNameUpper = TablesManageFunc._toDumpFirstUpper(tabName);
            //去掉多余字段值--status
            let newSysTab = Object.assign({}, sysTab);
            delete newSysTab.status;
            let codeStr = `public class ${tabNameUpper} {${NextLineStr}`;
            //SysTab
            codeStr += `${NextLineStr}${TabStr}//SysTab信息${NextLineStr}`;
            for(let key in newSysTab){
                if(newSysTab[key]){
                    codeStr += `${TabStr}public static final String ${key.toUpperCase()} = "${newSysTab[key]}";${NextLineStr}`;
                }
            }
            //SysFld
            codeStr += `${NextLineStr}${TabStr}//SysFld（FLD_字段大写）${NextLineStr}`;
            sysFld.forEach((fld) => {
                let key = fld[SysFld.FLD_COL_NAME];
                codeStr += `${TabStr}public static final String FLD_${key.toUpperCase()} = "${key}";${NextLineStr}`;
            });
            //SysFldVal
            codeStr += `${NextLineStr}${TabStr}//SysFldVal（FLDVAL_字段大写_显示值的中文简拼）${NextLineStr}`;
            sysFldVal.forEach((fldVal) => {
                let key = fldVal[SysFldVal.FLD_COL_NAME];
                let dispVal = fldVal[SysFldVal.FLD_DISP_VAL];
                let dbVal = fldVal[SysFldVal.FLD_DB_VAL];
                codeStr += `${TabStr}public static final String FLDVAL_${key.toUpperCase()}_${zhToJp(dispVal)} = "${dbVal}";${NextLineStr}`;
            });
            codeStr += `${NextLineStr}}`;
            files.push({path: `src/config/tables`, fileName: `${tabNameUpper}.java`, code: codeStr});
        });
        if(files.length){
            let app = this.context.urlPath.config.exportTemplate;
            TablesManageFunc._writeFile.call(this, app, files);
        }
    },

    /**
     * 导出SysEntity信息
     * @param rows
     */
    exportEntity: function (rows) {
        if (rows.some((row)=> row.status == StatusNone)) {
            notification.warning({
                message: '友情提示：',
                description: '未配置是不能导出SQL的',
            });
            return;
        }
        let files = [];
        rows.forEach(row => {
            let sysTab = row[SysTab.TAB_NAME], sysFld = row[SysFld.TAB_NAME], sysFldVal = row[SysFldVal.TAB_NAME] || [];
            let tabName = sysTab[SysTab.FLD_TAB_NAME];
            let tabNameUpper = TablesManageFunc._toDumpFirstUpper(tabName);
            //去掉多余字段值--status
            let newSysTab = Object.assign({}, sysTab);
            delete newSysTab.status;
            let codeStr = `export const ${tabNameUpper} = {${NextLineStr}`;
            //SysTab
            codeStr += `${NextLineStr}${TabStr}//SysTab信息${NextLineStr}`;
            for(let key in newSysTab){
                if(newSysTab[key] != null && newSysTab[key] != undefined){
                    codeStr += `${TabStr}${TablesManageFunc._toDump(key)} : '${newSysTab[key]}',${NextLineStr}`;
                }
            }
            //SysFld
            codeStr += `${NextLineStr}${TabStr}//SysFld信息${NextLineStr}`;
            codeStr += `${TabStr}sysFld: [${NextLineStr}`;
            sysFld.forEach((fld, i) => {
                if(i == 0){
                    codeStr += `${TabStr}{${NextLineStr}`;
                }
                for(let key in fld){
                    //去掉Val（数据库中查询出来会存在）
                    if(key.lastIndexOf('val') > 0){
                        delete fld[key];
                    }
                    if(fld[key] != null && fld[key] != undefined){
                        codeStr += `${TabStr}${TabStr}${TablesManageFunc._toDump(key)} : '${fld[key]}',${NextLineStr}`;
                    }
                }
                if(i == sysFld.length - 1){
                    codeStr += `${TabStr}}],${NextLineStr}`;
                }else{
                    codeStr += `${TabStr}}, {${NextLineStr}`;
                }
            });
            //SysFldVal
            codeStr += `${NextLineStr}${TabStr}//SysFldVal信息${NextLineStr}`;
            codeStr += `${TabStr}sysFldVal: {${NextLineStr}`;
            //1.先根据fldName分组
            let sysFldVals = {};
            sysFldVal.forEach((fldVal) => {
                let fldName = fldVal[SysFldVal.FLD_COL_NAME];
                sysFldVals[fldName] = sysFldVals[fldName] || [];
                sysFldVals[fldName].push(fldVal);
            });
            //2.每组sysFldVal按照dispOrder排序
            for(let fldName in sysFldVals){
                let newSysFldVal = sysFldVals[fldName].sort((fldValA, fldValB) => fldValA[SysFldVal.FLD_DISP_ORDER] - fldValB[SysFldVal.FLD_DISP_ORDER]);
                //3.构建STR
                codeStr += `${TabStr}${TabStr}${fldName}: [${NextLineStr}`;
                newSysFldVal.forEach((fldVal, i) => {
                    if(i == 0){
                        codeStr += `${TabStr}${TabStr}{${NextLineStr}`;
                    }
                    for(let key in fldVal){
                        if(fldVal[key] != null && fldVal[key] != undefined){
                            if(typeof fldVal[key] == "number"){
                                codeStr += `${TabStr}${TabStr}${TabStr}${TablesManageFunc._toDump(key)} : ${fldVal[key]},${NextLineStr}`;
                            }else{
                                codeStr += `${TabStr}${TabStr}${TabStr}${TablesManageFunc._toDump(key)} : '${fldVal[key]}',${NextLineStr}`;
                            }

                        }
                    }
                    if(i == newSysFldVal.length - 1){
                        codeStr += `${TabStr}${TabStr}}],${NextLineStr}`;
                    }else{
                        codeStr += `${TabStr}${TabStr}}, {${NextLineStr}`;
                    }
                });
            }
            codeStr += `${TabStr}},`;
            codeStr += `${NextLineStr}};`;
            files.push({path: `src/config/entitys`, fileName: `${tabNameUpper}.js`, code: codeStr});
        });
        if(files.length){
            let app = this.context.urlPath.config.exportTemplate;
            TablesManageFunc._writeFile.call(this, app, files);
        }

        //追加导出sysTables文件的配置
        files = [];
        rows.forEach((row) => {
            let tabName = row[SysTab.TAB_NAME][SysTab.FLD_TAB_NAME];
            let tabNameUpper = TablesManageFunc._toDumpFirstUpper(tabName);
            files.push({path: `src/config`,
                fileName: `sysEntitys.js`,
                code: Template.SysEntitys(tabNameUpper),
                tabName: tabNameUpper});
        });
        if(files.length){
            let app = this.context.urlPath.config.appendTemplate;
            TablesManageFunc._writeFile.call(this, app, files);
        }
    },

    /**
     * 编辑完成某行之后的回调行数
     * @param sysTab
     */
    configTabSuccess: function (sysTab) {
        console.info(sysTab);
        this.setState({sysTab: null, index: null});
        this.refs[DataGridObj].updateRow(sysTab, this.state.index);
    },

    /**
     * @param name
     * @returns {*}
     * @private
     */
    _toDumpFirstUpper: function (name = '') {
        let newName = TablesManageFunc._toDump(name);
        if(newName.length){
            return newName.charAt(0).toUpperCase() + newName.substr(1);
        }else{
            return newName;
        }
    },

    /**
     * 将一个名称名称（main_menu）转化为驼峰命名法
     * 规则：
     *      1.中间碰到下划线（_）的后面一个字母大写
     * @param name
     * @returns {*}
     * @private
     */
    _toDump: function (name = '') {
        return name.replace(/\_(\w)/g, function(all, letter){
            return letter.toUpperCase();
        });
    },

    /**
     * 调用nodejs发布的FILE服务，将代码目录及文件写入到当前代码环境中
     * @param app
     * @param files [{path: 'src/app/user/page', fileName: 'userManage.js', code: '1234555'}]
     * @private
     */
    _writeFile: function (app, files) {
        fetch(FilePath + app, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({files}),
            mode: 'cors',
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then(({state, message})=> {
            if(state){
                notification.success({message: '友情提示：', description: '导出成功！'});
            }else{
                notification.error({message: '友情提示：', description: message});
            }
        }).catch(({message})=> {
            notification.error({message: '友情提示：', description: message});
        });
    },
};