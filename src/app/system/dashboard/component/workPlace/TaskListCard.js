/**
 * author            Suger
 * time              2018/8/30
 * class:            TodoTaskList
 * description:      任务列表，响应单个任务详细信息侧栏
 */
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {Card, Avatar} from "antd";
import {getNotice} from "../analysisPage/data";
import "./TaskListCard.css";

export default class TaskListCard extends React.PureComponent {

    static propTypes = {
        title: PropTypes.string.isRequired,
        app: PropTypes.string,
        onItemClick: PropTypes.func,
    };

    static defaultProps = {
        title: '待办任务',
        onItemClick: ()=>null,
    };

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
    }

    render() {
        let notice = getNotice;
        return (
            <div className='ca-tasklistcard'>
                <Card
                    className='projectList'
                    style={{marginBottom: 24}}
                    title="待办任务"
                    bordered={false}
                    bodyStyle={{padding: 0}}
                >
                    {notice.map(item => (
                        <Card.Grid className='projectGrid' key={item.id} onClick={this._handleItemClick}>
                            <Card bodyStyle={{padding: 0}} bordered={false}>
                                <Card.Meta
                                    title={
                                        <div className='cardTitle'>
                                            <Avatar size="small" src={item.logo}/>
                                            {item.title}
                                        </div>
                                    }
                                    description={item.description}
                                />
                                <div className='projectItemContent'>
                                    {item.updatedAt && (
                                        <span className='datetime' title={item.updatedAt}>
                          {moment(item.updatedAt).fromNow()}
                        </span>
                                    )}
                                </div>
                            </Card>
                        </Card.Grid>
                    ))}
                </Card>
            </div>
        );
    }

    _handleItemClick = (evt)=> {
        this.props.onItemClick();
        evt.stopPropagation();
    }
}