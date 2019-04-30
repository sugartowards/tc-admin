/**
 * Created by Suger on 2018/3/29.
 */
import {SysMenu} from '../../../../config/sysTables';

export const Template = {
    'ManagePage': function({tabName, pageName, pageNameUpper, dateStr, title}) {
        return `/**
 * Created by CtnFrame-Admin on ${dateStr}.
 * ${title}
 */
import React from 'react';
import {ManagePage} from 'CtnUi';
import {${tabName}} from '../../../../config/sysTables';
import {${pageNameUpper}Func} from '../function/${pageName}';

export default class ${pageNameUpper} extends ManagePage {

    constructor(props, context){
        super(props, context);
        this.maj= ${tabName}.MAJOR_TYPE;
        this.min= ${tabName}.MINOR_TYPE;
        this.func = super.bindFunc(${pageNameUpper}Func);
    }
    
}`;
    },
    'ManagePageFunc': function({tabName, pageNameUpper, dateStr, buttons}) {
        let buttonsCode = buttons.map(button => {
            if(button.click.indexOf('insert') >= 0){
                return `    /**
     * ${button.title}
     */
    ${button.click}: function () {
        let {urlPath} = this.context;
        this.insert({
            app: \`\${urlPath.config.common}/\${${tabName}.TAB_NAME}\`,
        });
    },
`;
            }else if(button.click.indexOf('update') >= 0 || button.click.indexOf('edit') >= 0){
                return `    /**
     * ${button.title}
     * @param rows
     */
    ${button.click}: function (rows) {
        let {urlPath} = this.context;
        this.update({
            app: \`\${urlPath.config.common}/\${${tabName}.TAB_NAME}/\${rows[0].id}\`,
            formOptions: {
                defaultValue: rows[0],
            }
        });
    },
`;
            }else if(button.click.indexOf('delete') >= 0){
                return `    /**
     * ${button.title}
     * @param rows
     */
    ${button.click}: function (rows) {
        let {urlPath} = this.context;
        this.delete({
            app: \`\${urlPath.config.common}/\${${tabName}.TAB_NAME}/\${rows[0].id}\`,
        });
    },
`;
            }else if(button.click.indexOf('query') >= 0){
                return `    /**
     * ${button.title}
     * @param rows
     */
    ${button.click}: function (rows) {
        this.query({
            formOptions: {
                defaultValue: rows[0]
            }
        });
    },
`;
            }else{
                return `    /**
     * ${button.title}
     * @param rows
     */
    ${button.click}: function (rows) {
        //Todo
        console.info(this);
    },
`;
            }
        });
        return `/**
 * Created by CtnFrame-Admin on ${dateStr}.
 */
import {${tabName}} from '../../../../config/sysTables';
 
export const ${pageNameUpper}Func = {

${buttonsCode.join('\r\n')}
};`;
    },
};

export const TemplateCfg = {};
TemplateCfg[SysMenu.FLDVAL_MENU_TYPE_ManagePage] = 'ManagePage';