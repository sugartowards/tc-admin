import React from 'react';

export const AppMap = {
    'system/dashboard/analysisPage': () => import(/* webpackChunkName: "analysisPage" */'../app/system/dashboard/page/analysisPage'),
    'system/dashboard/workPlace': () => import(/* webpackChunkName: "workPlace" */'../app/system/dashboard/page/workPlace'),
    'system/permision/userManage': () => import(/* webpackChunkName: "userManage" */'../app/system/permision/page/userManage'),
    'system/permision/deptManage': () => import(/* webpackChunkName: "deptManage" */'../app/system/permision/page/deptManage'),
    'system/permision/roleManage': () => import(/* webpackChunkName: "roleManage" */'../app/system/permision/page/roleManage'),
    'system/permision/rolePermission': () => import(/* webpackChunkName: "rolePermission" */'../app/system/permision/page/rolePermission'),
    'system/attendance/userAttendance': () => import(/* webpackChunkName: "userAttendance" */'../app/system/attendance/page/userAttendance'),
    'system/log/opertionLog': () => import(/* webpackChunkName: "opertionLog" */'../app/system/log/page/opertionLog'),
    'system/log/requestLog': () => import(/* webpackChunkName: "requestLog" */'../app/system/log/page/requestLog'),
    'system/login/userInfo': () => import(/* webpackChunkName: "userInfo" */'../app/system/login/page/userInfo'),
    'admin/menu/menuManage': () => import(/* webpackChunkName: "menuManage" */'../app/admin/menu/page/menuManage'),
    'admin/system/tablesManage': () => import(/* webpackChunkName: "tablesManage" */'../app/admin/system/page/tablesManage'),
    'admin/config/urlManage': () => import(/* webpackChunkName: "urlManage" */'../app/admin/config/page/urlManage'),
};
