/**
 * Created by Suger on 2018/5/4.
 */
import React from 'react';
import {Col, Row, Icon, List} from 'antd';
import {Page, Tree, ButtonList, Util} from 'CtnUi';
import {RolePermissionFunc, TreeObj} from '../../permision/function/rolePermission';
import '../../permision/css/rolePermission.css';

export default class RolePermission extends Page {

    constructor(props) {
        super(props);
        this.func = this.bindFunc(RolePermissionFunc);
        this.state = {
            roles: [],
            selectRole: props.role,
            menus: null,
            selectMenus: null
        };
    }

    componentWillMount() {
        this.treeOptions = {
            ref: TreeObj,
            params: '',
            checkable: true,
            dataKey: {
                key: 'id',
                title: 'title',
            },
            selectToCheck: true,
        };
        let list = [{text: '保存', type: 'primary', click: 'saveMenuPermission'}];
        this.buttonListOptions = {
            list: list,
        };
        this.bindFuncObj(list, this.buttonListOptions);
    }

    render() {
        let {roles, selectRole, menus, selectMenus} = this.state;
        return (
            <div className="ca-rolepermission">
                <Row type='flex' align='center'>
                    <Col span={1} className='icon'>
                        <Icon type="user-add"/>
                    </Col>
                    <Col span={6} className='name'>
                        <Row type='flex' align='middle'>
                            {selectRole.name}
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} className="roles">
                        <List
                            bordered
                            dataSource={roles}
                            renderItem={({id, name}) => {
                                return <List.Item key={id} id={id} className={id == selectRole.id ? 'roleactive' : null}
                                                  onClick={this.func.onSelectRole}>{name}</List.Item>;
                            }}
                        />
                    </Col>
                    <Col span={20}>
                        {
                            <Row type='flex' justify='start'>
                                <Col span={24} className='tree'>
                                    {
                                        menus && selectMenus ?
                                            <Tree {...this.treeOptions} data={menus} checkedKeys={selectMenus}/> : null
                                    }
                                </Col>
                                <Col span={1} style={{marginLeft: 10}}>
                                    <ButtonList {...this.buttonListOptions}/>
                                </Col>
                            </Row>
                        }
                    </Col>
                </Row>
            </div>
        );
    }

    componentDidMount() {
        let {urlPath} = this.context;
        this.func.queryRolePmsn(this.state.selectRole.id);
        Util.Fetch.post(`${urlPath.pmsn.role}/list`, {}, ({rows}) => {
            if (rows.length) {
                this.setState({roles: rows});
            }
        });
        Util.Fetch.get(urlPath.pmsn.menuTree, {}, (rows) => {
            if (rows.length) {
                this.setState({menus: rows});
            }
        });
    };
}