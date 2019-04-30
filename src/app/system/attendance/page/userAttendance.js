/**
 * Created by CtnFrame-Admin on 2018/8/7.
 * 个人考勤
 */
import React from "react";
import moment from 'moment';
import {Calendar, Row, Col} from "antd";
import {Page, ButtonList, Panel} from "CtnUi";
import {UserAttendanceFunc} from "../function/userAttendance";
import '../css/userAttendance.css';

export default class UserAttendance extends Page {

    constructor(props, context) {
        super(props, context);
        this.func = this.bindFunc(UserAttendanceFunc);
        this.state = {
            value: moment(),
            curTime: moment().format('HH:mm:ss'),
        };
    }

    componentWillMount() {
        super.componentWillMount();
        this.calendarOptions = {
            onSelect: this.func.handleOnSelect,
            onPanelChange: this.func.handleOnSelect,
            dateCellRender: this.func.handleDateCellRender,
        };
        let list = [{type: 'primary', text: <b>今天</b>, click: 'toToday'}, {text: '出勤明细'}];
        this.buttonListOptions = {
            list,
            style: {display: 'inline-block', float: 'right', marginTop: 12, marginLeft: 20}
        };
        this.bindFuncObj(list, this.buttonListOptions);
    }

    render() {
        let {value, curTime} = this.state;
        let title = `${value.format('YYYY-MM-DD')}  |  ${value.format('dddd')}`;
        return (
            <Row type='flex' className='ca-userattendance'>
                <Col span={18}>
                    <ButtonList {...this.buttonListOptions}/>
                    <Calendar {...this.calendarOptions} value={value}/>
                </Col>
                <Col span={6}>
                    <Panel title={title} className='panel'>
                        <Panel className='curtime'>
                            {curTime}
                        </Panel>
                        <Panel className='text'>
                            <font>签到时间：</font>暂无<br />
                            <font>签到地址：</font>暂无
                        </Panel>
                        <Panel className='text'>
                            <font>签退时间：</font>2018-8-8 8:26:07<br />
                            <font>签退地址：</font>9楼出门
                        </Panel>
                    </Panel>
                </Col>
            </Row>
        );
    }

    componentDidMount() {
        super.componentDidMount();
        this.getCurTime = setInterval(()=> {
            this.setState({curTime: moment().format('HH:mm:ss')});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.getCurTime);
        this.getCurTime = null;
    }
}