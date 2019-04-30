/**
 * Created by Suger on 2018/3/27.
 */
import React from 'react';
import {Page, Query, DataGrid} from 'CtnUi';
const ToolBar = DataGrid.ToolBar;
import SysEntity from 'CtnUi/types/sysEntity/SysEntity';
import {SysTab, SysFld} from '../../../../config/sysTables';
import TablesEdit from './tablesEdit';
import {TablesManageFunc, DataGridObj} from '../function/tablesManage';
import '../css/tablesManage.css';

export const StatusHas = 1;//默认存在配置
export const StatusNew = 2;//新增配置
export const StatusNone = 3;//未没有配置

export default class TablesManage extends Page {

    constructor(props) {
        super(props);
        this.state = {
            sysTab: null,
            index: null,
        };
        this.func = super.bindFunc(TablesManageFunc);
        this.sysEntity = new SysEntity({
            "sysFld": [{
                aliasColName: "表名",
                colName: "tab_name",
                dispType: '1',
                queryController : '2',
            }, {
                aliasColName: "说明",
                colName: "alias_tab_name",
                queryController : '0',
            }, {
                aliasColName: "状态(SysEntity)",
                colName: "status",
                queryController : '0',
            }]
        });
    };

    componentWillMount() {
        let toolBar = [{text: '配置', buttonType: ToolBar.ROW, click: 'configTab'},
            {text: '导出SQL', buttonType: ToolBar.ANY_ONE, click: 'exportSql'},
            {text: '导出Table', buttonType: ToolBar.ANY_ONE, click: 'exportJsTable'},
            {text: '导出服务Table', buttonType: ToolBar.ANY_ONE, click: 'exportJavaTable'},
            {text: '导出Entity', buttonType: ToolBar.ANY_ONE, click: 'exportEntity'}];
        // let toolBar = this.props.buttons;
        this.dataGridOptions = {
            ref: DataGridObj,
            app: this.context.urlPath.config.queryDbTable,
            sysEntity: this.sysEntity,
            rowKey: 'TABLE_NAME',
            toolBar: toolBar,
            status: {
                render: (text, record) => {
                    let fontColor = 'red';
                    let flag = (record[SysTab.TAB_NAME] && record[SysFld.TAB_NAME]/* && record[SysFldVal.TAB_NAME]*/);
                    if (record.status == StatusHas || (!record.status && flag)) {
                        record.status = StatusHas;//默认存在
                        text = '已配置';
                        fontColor = '#EEE';
                    } else if (record.status == StatusNew) {
                        if (flag) {
                            text = '配置完成';
                            fontColor = 'green';
                        } else {
                            text = '配置中...';
                            fontColor = 'blue';
                        }
                    }
                    if (record.status == StatusNone || !flag) {
                        record.status = StatusNone;
                        text = '未配置';
                    }
                    return <font style={{color: fontColor}}>{text}</font>;
                }
            },
        };
        this.bindFuncObj(toolBar, this.dataGridOptions);
        this.tablesEditOptions = {
            success: this.func.configTabSuccess,
        };
        this.queryOptions = {
            sysEntity: this.sysEntity,
            queryClick: this.func.queryClick,
        };
    }

    render() {
        let flag = this.state.sysTab;
        return (
            <div className="ca-tablesmanage-body">
                <div style={{display: flag ? 'none': 'block'}}>
                    <Query {...this.queryOptions}/>
                    <DataGrid {...this.dataGridOptions}/>
                </div>
                {flag ? <TablesEdit {...this.tablesEditOptions} sysTab={this.state.sysTab}/> : null}
            </div>
        )
    }

}
