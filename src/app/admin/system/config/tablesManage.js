/**
 * Created by Suger on 2018/4/8.
 */
export const Template = {

    'SysEntitys': function (tabNameUpper) {
        return `
import {${tabNameUpper}} from './entitys/${tabNameUpper}';
SysEntitys[${tabNameUpper}.majorType] = SysEntitys[${tabNameUpper}.majorType] || {};
SysEntitys[${tabNameUpper}.majorType][${tabNameUpper}.minorType] = ${tabNameUpper};
`;
    },

    'SysTables': function (tabNameUpper) {
        return `\r\nexport * from './tables/${tabNameUpper}';`;
    },

};