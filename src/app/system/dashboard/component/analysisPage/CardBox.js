/**
 * author            Suger
 * time              2018/8/28
 * class:            CardBox
 * description:
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import './CardBox.css';

export default class CardBox extends React.PureComponent {

    static propTypes = {
        title: PropTypes.string,
        total: PropTypes.string,
        footer: PropTypes.element,
    };

    componentWillMount() {
        this.cardOptions = {
            bordered: false,
            bodyStyle: {padding: '20px 24px 8px 24px'},
        };
    }

    render() {
        let {title, total, children, footer} = this.props;
        return (
            <Card {...this.cardOptions}>
                <div className='chartCard'>
                    <div className='chartTop'>
                        <div className='metaWrap'>
                            <div className='meta'>
                                <span>{title}</span>
                            </div>
                            <div className='total' dangerouslySetInnerHTML={{__html: total}}/>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='contentFixed'>
                            {children}
                        </div>
                    </div>
                    <div className='card-footer'>
                        {footer}
                    </div>
                </div>
            </Card>
        );
    }

}