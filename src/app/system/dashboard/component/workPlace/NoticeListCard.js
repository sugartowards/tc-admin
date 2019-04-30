/**
 * author            Suger
 * time              2018/8/30
 * class:            NoticeListCard
 * description:      消息提示列表
 */
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {Card, Avatar, List} from "antd";
import {Util} from 'CtnUi';
import "./NoticeListCard.css";

export default class NoticeListCard extends React.PureComponent {

    static propTypes = {
        title: PropTypes.string,
        app: PropTypes.string,
    };

    static defaultProps = {
        title: '消息通知',
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
        };
    }

    render() {
        let {title} = this.props;
        let {data} = this.state;
        return (
            <div className='ca-noticelistcard'>
                <Card bordered={false} title={title}>
                    <List size="large">
                        <div className='activitiesList'>{data.map(this._renderListItem)}</div>
                    </List>
                </Card>
            </div>
        );
    }

    /**
     * 渲染List的每项
     * @returns {XML}
     * @private
     */
    _renderListItem = ({id, user_name, avatar, message, date}) => {
        let itemOptions = {
            avatar: <Avatar src={avatar}/>,
            title: `${user_name}：${message}`,
            description: <span className='datetime' title={date}>{moment(date, 'YYYY-MM-DD HH:mm:SS').fromNow()}</span>,
        };
        return (
            <List.Item key={id}>
                <List.Item.Meta {...itemOptions}/>
            </List.Item>
        );
    };

    componentDidMount() {
        // Util.Fetch.get(this.props.app, null, (data)=> {
        //     this.setState({data});
        // });
        let data = [{
            id: 1,
            user_name: '管理员',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            message: '今天周五，请大伙出去搓一顿。。。。！！！！！',
            date: '2018-08-30 12:30:31',
        }, {
            id: 1,
            user_name: '管理员',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            message: '今天周五，请大伙出去搓2顿。。。。！！！！！',
            date: '2018-08-30 12:30:31',
        }, {
            id: 1,
            user_name: '管理员',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            message: '今天周五，请大伙出去搓3顿。。。。！！！！！',
            date: '2018-08-30 12:30:31',
        }];
        this.setState({data});
    }

}