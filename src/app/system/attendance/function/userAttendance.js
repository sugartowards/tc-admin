/**
 * Created by Suger on 2018/8/8.
 */
import React from 'react';
import moment from 'moment';

export const UserAttendanceFunc = {

    handleOnSelect: function (value) {
        this.setState({value});
    },

    handleDateCellRender: function (date) {
        if (0 == date.day() || 6 == date.day()) {
            return <span className='weekend'>周末</span>
        }
    },

    /**
     * 跳转今天
     */
    toToday: function () {
        this.setState({value: moment()});
    },
};