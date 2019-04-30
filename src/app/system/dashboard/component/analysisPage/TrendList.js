/**
 * author            Suger
 * time              2018/8/29
 * class:            TrendList
 * description:      趋势文本信息数组
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import classNames from 'classnames';
import './TrendList.css';

export default class TrendList extends React.PureComponent {

    static propTypes = {
        data: PropTypes.array.isRequired,
    };

    render() {
        let {data} = this.props;
        return (
            <div className='trendlist'>{
                data.map(({flag, text, value}, index)=>
                    <div className={classNames('trendItem', {'trendItem-notfirst': 0 !== index})}>
                        <span>
                            {text}<span className='trendText'>{value}</span>
                        </span>
                        <span className={flag}>
                            <Icon type={`caret-${flag}`}/>
                        </span>
                    </div>)
            }</div>
        );
    }
}