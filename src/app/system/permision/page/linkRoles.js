/**
 * Created by Suger on 2018/5/4.
 */
import React from 'react';
import {Transfer} from 'antd';
import {DialogPage, Util} from 'CtnUi';
import '../css/linkRoles.css';

export default class LinkRoles extends DialogPage {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            targetKeys: [],
        };
    }

    render() {
        let {dataSource, targetKeys} = this.state;
        return (
            <div className="ca-linkroles">
                <Transfer
                    rowKey={record => record.id}
                    dataSource={dataSource}
                    titles={['未关联角色', '已关联角色']}
                    notFoundContent='角色列表为空'
                    render={item => item.name}
                    targetKeys={targetKeys}
                    onChange={this._handleChange}
                />
                {super.render()}
            </div>
        );
    }

    componentDidMount() {
        let {urlPath} = this.context;
        let {user} = this.props;
        Util.Fetch.get(`${urlPath.pmsn.userRole}/${user.id}`, null, (rows = []) => {
            if (rows.length) {
                this.setState({targetKeys: rows.map((userRole => userRole.role_id))});
            }
        });
        Util.Fetch.post(`${urlPath.pmsn.role}/list`, {}, ({rows}) => {
            if (rows.length) {
                this.setState({dataSource: rows});
            }
        });
    };

    /**
     * 确定点击的回调函数
     */
    onOk() {
        let {urlPath} = this.context;
        let {user, destroy} = this.props;
        let userRoles = this.state.targetKeys.map(key => ({
            role_id: key,
            user_id: user.id,
        }));
        Util.Fetch.post(`${urlPath.pmsn.userRole}/${user.id}`, userRoles, destroy);
        return false;
    }


    /**
     * 左右添加减少时候触发函数
     * @param nextTargetKeys
     * @private
     */
    _handleChange = (nextTargetKeys) => {
        this.setState({targetKeys: nextTargetKeys});
    };
}