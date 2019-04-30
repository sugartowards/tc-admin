/**
 * author            Suger
 * time              2018/8/30
 * class:            UserHeader
 * description:      用户相关信息构建的页面头部组件
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Row} from 'antd';
import moment from 'moment';
import {PmsnUser} from '../../../../../config/sysTables';
import './UserHeader.css';

export default class UserHeader extends React.PureComponent {

    static propTypes = {
        userInfo: PropTypes.object.isRequired,
    };

    render() {
        let {userInfo} = this.props;
        let greetStr = moment().hour() > 12 ? '下午好' : '上午好';
        return (
            <Row className='ca-userheader'>
                <div className='avatar'>
                    <Avatar size="large" src={userInfo[PmsnUser.FLD_IMAGE]}/>
                </div>
                <div className='content'>
                    <div className='contentTitle'>{greetStr}，{userInfo[PmsnUser.FLD_USER_NAME]}，祝你开心每一天！</div>
                    <div>电话：{userInfo[PmsnUser.FLD_TEL]}&nbsp;&nbsp;|&nbsp;&nbsp;
                        手机：{userInfo[PmsnUser.FLD_MOBILE]}&nbsp;&nbsp;|&nbsp;&nbsp;
                        邮箱：{userInfo[PmsnUser.FLD_EMAIL]}</div>
                </div>
            </Row>
        );
    }
}