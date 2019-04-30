/**
 * Created by Suger on 2018/3/27.
 */
import React from 'react';
import {Row, Col, Icon, Button, Input, InputNumber, Select} from 'antd';
import {Page, DataGrid, DragDataGrid, ButtonList, Util} from 'CtnUi';
const ToolBar = DataGrid.ToolBar;
import {SysTab, SysFld, SysFldVal} from '../../../../config/sysTables';
import {TablesEditFunc, TabTableObj, FldTableObj, FldValTableObj} from '../function/tablesEdit';

export default class TablesEdit extends Page {
    constructor(props) {
        super(props);
        this.func = super.bindFunc(TablesEditFunc);
        let {sysTab} = props;
        this.sysTab = sysTab[SysTab.TAB_NAME] || Object.assign({}, sysTab);
        this.sysFld = sysTab[SysFld.TAB_NAME] || [];
        this.sysFldVal = sysTab[SysFldVal.TAB_NAME] || [];
        if (this.sysFld) {
            this.func.onLoadSuccess(this.sysFld);
        }
    };

    componentWillMount() {
        this.tabOptions = {
            ref: TabTableObj,
            sysEntity: this.getSysEntity(SysTab.MAJOR_TYPE, SysTab.MINOR_TYPE),
            rowKey: SysTab.FLD_TAB_NAME,
            pagination: false,
            size: 'small',
            dataSource: [this.sysTab],
            major_type: {
                render: this.getDomForInputNumber(SysTab.FLD_MAJOR_TYPE, TabTableObj)
            },
            minor_type: {
                render: this.getDomForInputNumber(SysTab.FLD_MINOR_TYPE, TabTableObj)
            },
            asso_major: {
                render: this.getDomForInputNumber(SysTab.FLD_ASSO_MAJOR, TabTableObj)
            },
            asso_minor: {
                render: this.getDomForInputNumber(SysTab.FLD_ASSO_MINOR, TabTableObj)
            },
            alias_tab_name: {
                render: this.getDomForInput(SysTab.FLD_ALIAS_TAB_NAME, TabTableObj)
            },
        };
        this.fldOptions = {
            ref: FldTableObj,
            submitType: Util.Fetch.GET,
            app: this.sysFld.length ? null : this.context.urlPath.config.queryDbFld,
            dataSource: this.sysFld,
            sysEntity: this.getSysEntity(SysFld.MAJOR_TYPE, SysFld.MINOR_TYPE),
            rowKey: SysTab.FLD_COL_NAME,
            pagination: false,
            size: 'small',
            onDrag: this.func.onDrag,
            onLoadSuccess: this.func.onLoadSuccess,
            params: {
                tabName: this.props.sysTab[SysTab.FLD_TAB_NAME]
            },
            query_controller: {
                render: this.getDomForNumChange(SysFld.FLD_QUERY_CONTROLLER, null, '0,2', 2)
            },
            show_controller: {
                render: this.getDomForNumChange(SysFld.FLD_SHOW_CONTROLLER, 1)
            },
            edit_controller: {
                render: this.getDomForNumChange(SysFld.FLD_EDIT_CONTROLLER, 2)
            },
            add_controller: {
                render: this.getDomForNumChange(SysFld.FLD_ADD_CONTROLLER, 2)
            },
            nullable: {
                render: this.getDomForNumChange(SysFld.FLD_NULLABLE, 1)
            },
            alias_col_name: {
                render: this.getDomForInput(SysFld.FLD_ALIAS_COL_NAME, FldTableObj)
            },
            place_holder: {
                render: this.getDomForInput(SysFld.FLD_PLACE_HOLDER, FldTableObj)
            },
            disp_type: {
                render: this.getDomForSelect(SysFld.FLD_DISP_TYPE, FldTableObj)
            },
            data_type: {
                render: this.getDomForSelect(SysFld.FLD_DATA_TYPE, FldTableObj)
            },
        };
        let toolBar = [{text: '新增', buttonType: ToolBar.TOP, click: 'addFldVal'},
                       {text: '删除', buttonType: ToolBar.TOP_ONE, click: 'delFldVal'}];
        this.fldValOptions = {
            ref: FldValTableObj,
            sysEntity: this.getSysEntity(SysFldVal.MAJOR_TYPE, SysFldVal.MINOR_TYPE),
            dataSource: this.sysFldVal,
            toolBar: toolBar,
            pagination: false,
            size: 'small',
            db_val: {
                render: this.getDomForInput(SysFldVal.FLD_DB_VAL, FldValTableObj)
            },
            disp_val: {
                render: this.getDomForInput(SysFldVal.FLD_DISP_VAL, FldValTableObj)
            },
            disp_order: {
                render: this.getDomForInputNumber(SysFldVal.FLD_DISP_ORDER, FldValTableObj)
            },
            col_name: {
                render: this.getDomForCol(SysFldVal.FLD_COL_NAME, FldValTableObj)
            }
        };
        this.bindFuncObj(toolBar, this.fldValOptions);

        let list = [{type: 'primary', text: <b><Icon type="left"/> 完成配置</b>, click: 'success'}];
        this.buttonListOptions = {
            list: list,
            success: this.func.success,
        };
        this.rowOptions = {
            style: {
                marginBottom: 15,
            },
            type: 'flex',
            align: 'middle',
        };
    }

    render() {
        return (
            <div ref={ node => this.containerDiv = node }>
                <Row {...this.rowOptions}>
                    <ButtonList {...this.buttonListOptions}/>
                </Row>
                <Row {...this.rowOptions}>
                    <Col span={24}><DataGrid {...this.tabOptions}/></Col>
                </Row>
                <Row {...this.rowOptions}>
                    <Col span={24}><DragDataGrid {...this.fldOptions}/></Col>
                </Row>
                <Row {...this.rowOptions}>
                    <Col span={24}><DataGrid {...this.fldValOptions}/></Col>
                </Row>
            </div>
        );
    }

    /**
     * 0-maxMum之间切换的数值使用
     * towNums之间切换的数值使用
     * @param field
     * @param maxMum
     * @param towNums
     * @param defaultNum
     * @returns {function(*=, *)}
     */
    getDomForNumChange(field, maxMum, towNums = '', defaultNum = '1') {
        return (text, record, index) => {
            //设置默认值
            if (text == undefined || text == null) {
                record[field] = defaultNum;
            }else{
                record[field] = `${text}`;
            }
            //设置按钮类型(颜色)
            let btnOptions = {
                field,
                rowIndex: index,
                maxMum,
                towNums,
                onClick: this.func.changeNum,
            };
            if (record[field] == '2') {
                btnOptions.type = 'primary';
            }else if(record[field] == '0'){
                btnOptions.ghost = true;
            }
            return <Button {...btnOptions}>{text}</Button>;
        }
    }

    /**
     * 字符输入框
     * @param field
     * @param obj
     * @returns {function(*, *, *)}
     */
    getDomForInput(field, obj) {
        return (text, record, index) => {
            return <Input field={field} rowIndex={index} value={text} obj={obj}
                          onChange={this.func.changeText}/>
        }
    }

    /**
     * 数字输入框
     * @param field
     * @param obj
     * @returns {function(*, *, *)}
     */
    getDomForInputNumber(field, obj) {
        return (text, record, index) => {
            let option = {field, index, obj, change: this.func.changeSelect};
            return <InputNumber defaultValue={text} style={{width: '100%'}} min={1} option={option} onChange={
                function (value) {
                    this.option.change(value, this.option);
                }
            }/>
        }
    }

    /**
     * 下拉框
     * @param field
     * @param obj
     * @returns {function(*, *, *)}
     */
    getDomForSelect(field, obj) {
        let dataArr = this.context.sysEntitys[SysFld.MAJOR_TYPE][SysFld.MINOR_TYPE].sysFldVal[field];
        return (text, record, index) => {
            let option = {field, index, obj, change: this.func.changeSelect};
            let defaultValue = text || (dataArr.length ? dataArr[0].dbVal : null);
            record[field] = defaultValue;
            return <Select option={option} defaultValue={defaultValue} style={{width: '100%'}} onChange={
                function (value) {
                    this.option.change(value, this.option);
                }
            }>
                {dataArr.map(({dbVal, dispVal}) => (
                    <Option key={`${dbVal}`} value={dbVal}>{dispVal}</Option>
                ))}
            </Select>
        }
    }

    /**
     * 下拉框
     * @param field
     * @param obj
     * @returns {function(*, *, *)}
     */
    getDomForCol(field, obj) {
        return (text, record, index) => {
            let option = {field, index, obj, change: this.func.changeSelect};
            let dataArr = this.columns;
            let defaultValue = text || (dataArr.length ? dataArr[0] : null);
            record[field] = defaultValue;
            return <Select option={option} defaultValue={defaultValue} style={{width: '100%'}} onChange={
                function (value) {
                    this.option.change(value, this.option);
                }
            }>
                {dataArr.map((data) => (
                    <Option key={data} value={data}>{data}</Option>
                ))}
            </Select>
        }
    }
}