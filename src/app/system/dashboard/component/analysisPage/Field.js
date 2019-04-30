/**
 * author            Suger
 * time              YYYY/MM/DD
 * class:            Field
 * description:      Field：显示文本信息
 */
import React from 'react';
import PropTypes from 'prop-types';
import './Field.css';

export default class Field extends React.PureComponent {

    static propTypes = {
        label: PropTypes.string,
        value: PropTypes.string,
    };

    render() {
        let {label, value} = this.props;
        return (
            <div className='field'>
                <span>{label}</span>
                <span>{value}</span>
            </div>
        );
    }
}