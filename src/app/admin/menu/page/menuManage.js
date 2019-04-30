/**
 * Created by Suger on 2018/3/22.
 */
import React from 'react';
import {Row, Col, Button} from 'antd';
import {Page, ButtonList, Tree, Form, Panel} from 'CtnUi';
import SysEntity from 'CtnUi/types/sysEntity/SysEntity';
import {MenuManageFunc, TreeObj, FormObj} from '../function/menuManage';
import {SysMenu} from '../../../../config/sysTables';
import '../css/menuManage.css';

export default class MenuManage extends Page {

    constructor(props) {
        super(props);
        this.state = {
            menu: {},
            checkedKeys: []
        };
        this.func = super.bindFunc(MenuManageFunc);
        this.manageEntity = new SysEntity({
            sysFld: [{
                aliasColName: "模版Page",
                colName: "template",
                dispType: '1',
            }, {
                aliasColName: "表名",
                colName: "tabName",
                dispType: '1',
            }]
        });
    }

    componentWillMount() {
        let list = [{text: '新增', click: 'addMenu'},
            {text: '删除', click: 'deleteMenu'},
            {text: '导出AppCfg', click: 'exportAppCfg', type: 'danger'},
            {text: '导出模版', click: 'exportPage', type: 'primary'},
            {text: '导出脚本', click: 'exportSql'}];
        // let list = this.props.buttons;
        this.buttonListOptions = {
            list: list,
        };
        this.bindFuncObj(list, this.buttonListOptions);

        this.treeOptions = {
            ref: TreeObj,
            app: this.context.urlPath.pmsn.menuTree,
            checkable: true,
            draggable: true,
            defaultExpandAll: true,
            checkStrictly: true,
            dataKey: {
                key: 'id',
                title: 'title',
            },
            onSelect: this.func.menuSelect,
        };
        this.formOptions = {
            ref: FormObj,
            sysEntity: this.getSysEntity(SysMenu.MAJOR_TYPE, SysMenu.MINOR_TYPE),
        };
        this.buttonOptions = {
            type: 'primary',
            onClick: this.func.onSave,
        };
    };

    render() {
        let buttonDisabled = Object.keys(this.state.menu).length == 0;
        return (
            <Row type="flex" justify='space-around' className='ca-menumanage-body'>
                <Col span={11}>
                    <Panel title="菜单组织结构">
                        <ButtonList {...this.buttonListOptions}/>
                        <Tree {...this.treeOptions}/>
                    </Panel>
                </Col>
                <Col span={11}>
                    <Panel title="菜单属性" extra={<Button {...this.buttonOptions} disabled={buttonDisabled}>保存</Button>}>
                        <Form {...this.formOptions}/>
                    </Panel>
                </Col>
            </Row>
        );
    }
}