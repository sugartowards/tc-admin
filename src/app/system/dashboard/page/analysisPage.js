/**
 * Created by Sugar on 2018/8/22.
 * 分析页
 */
import React from "react";
import {Row, Col, Card} from "antd";
import {Page} from "CtnUi";
import numeral from 'numeral';
import {CardBox, TrendList, MiniArea, MiniBar, Bar, Line, Field, getFakeChartData} from "../component/analysisPage";
import "../css/analysisPage.css";

export default class AnalysisPage extends Page {

    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: true,
        };
    }

    render() {
        let {loading} = this.state;
        const {visitData, visitData2, salesData, offlineChartData} = getFakeChartData;
        return (
            <div className='ca-analysispage'>
                <Row gutter='24' className='top'>
                    <Col span='6'>
                        <CardBox title="总销售额" total={this._yuanFormat(126560)}
                                 footer={this._renderFooter('月均销售额', 126560)}>
                            <TrendList data={[{flag: 'up', text: '月同比', value: '12%'},
                                {flag: 'down', text: '月环比', value: '11%'}]}/>
                        </CardBox>
                    </Col>
                    <Col span='6'>
                        <CardBox title="总采购额" total={this._yuanFormat(126560)}
                                 footer={this._renderFooter('月均采购额', 126560)}>
                            <TrendList data={[{flag: 'up', text: '月同比', value: '12%'},
                                {flag: 'down', text: '月环比', value: '11%'}]}/>
                        </CardBox>
                    </Col>
                    <Col span='6'>
                        <CardBox title="总应收账款" total={this._yuanFormat(126560)}
                                 footer={this._renderFooter('月收款', 126560, [{flag: 'up', text: '同比', value: '12%'},
                                     {flag: 'down', text: '环比', value: '11%'}])}>
                            <MiniArea data={visitData}/>
                        </CardBox>
                    </Col>
                    <Col span='6'>
                        <CardBox title="总应付账款" total={this._yuanFormat(126560)}
                                 footer={this._renderFooter('月付款', 126560, [{flag: 'up', text: '同比', value: '12%'},
                                     {flag: 'down', text: '环比', value: '11%'}])}>
                            <MiniBar data={visitData2}/>
                        </CardBox>
                    </Col>
                </Row>
                <div className='middle'>
                    <Card loading={loading} title="月购销金额">
                        <Bar height={292} data={salesData}/>
                    </Card>
                </div>
                <div className="bottom">
                    <Card loading={loading} title="月收付账款">
                        <Line height={300} data={offlineChartData}/>
                    </Card>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.setState({loading: false});
    }

    /**
     * 获取CardBox的底部节点
     * @param label
     * @param value
     * @param data
     * @returns {XML}
     * @private
     */
    _renderFooter = (label, value, data)=> {
        return (<div style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>
            <Field label={label} value={this._yuanFormat(value)}/>
            {data && <TrendList data={data}/>}
        </div>);
    };

    /**
     * 金币格式化函数
     * @param val
     * @private
     */
    _yuanFormat = val => `¥ ${numeral(val).format('0,0')}`;

}
