/**
 * author            Suger
 * time              2018/8/30
 * class:            TaskSilder
 * description:      任务侧栏
 */
import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import './TaskSilder.css';

export default class TaskSilder extends React.PureComponent {

    static propTypes = {
        visible: PropTypes.boolean,
    };

    static defaultProps = {};

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
    }

    render() {
        let {visible} = this.props;
        return (
            <QueueAnim delay={100} duration={600}>
                {
                    visible ? <div key='div' className='ca-tasksilder' onClick={this._handleWrapper}>123</div> : null
                }
            </QueueAnim>
        );
    }

    componentDidMount() {
    }

    /**
     * 阻止事件冒泡
     * @param evt
     * @private
     */
    _handleWrapper = (evt)=> {
        evt.stopPropagation();
    }
}