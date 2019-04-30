/**
 * author            Suger
 * time              2018/8/30
 * class:            LinkGroupCard
 * description:      快速开始按钮组
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Card, Button} from 'antd';
import './LinkGroupCard.css';

export default class LinkGroupCard extends React.PureComponent {

    static propTypes = {
        title: PropTypes.string,
        data: PropTypes.array,
        onClick: PropTypes.func,
        onAddClick: PropTypes.func,
    };

    static defaultProps = {
        title: '快速开始',
        onClick: ()=> null,
        onAddClick: ()=> null,
    };

    render() {
        let {title, data, onAddClick} = this.props;
        return (
            <div className='ca-linkgroupcard'>
                <Card title={title} bordered={false}>
                    <div className='linkGroup'>
                        {
                            data.map(({id, title}) =>
                                <a key={id} id={id} onClick={this._handleOnClick}>{title}</a>)
                        }
                        <Button size="small" type="primary" ghost onClick={onAddClick} icon="plus">
                            添加
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }

    _handleOnClick = ({currentTarget})=> {
        let {id} = currentTarget;
        let linkObj = this.props.data.find(link => link.id == id);
        this.props.onClick(linkObj);
    }
}