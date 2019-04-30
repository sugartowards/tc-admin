/**
 * author            Suger
 * time              2018/8/29
 * class:
 * description:
 */
import React from "react";
import {Chart, Tooltip, Geom, Legend, Axis} from "bizcharts";
import DataSet from "@antv/data-set";
import autoHeight from "./autoHeight";

@autoHeight
export default class Line extends React.Component {

    render() {
        let {height, data} = this.props;
        let ds = new DataSet();
        let dv = ds.createView();
        dv.source(data).transform({
            type: 'fold',
            fields: ['y1', 'y2'], // 展开字段集
            key: 'key', // key字段
            value: 'value', // value字段
        });
        return (
            <div style={{height: height + 30}}>
                <Chart height={height} padding='auto' data={dv} forceFit>
                    <Axis name='x'/>
                    <Tooltip />
                    <Legend name='key' position='top'/>
                    <Geom type='line' position='x*value' size={2} color='key'/>
                    <Geom type='point' position='x*value' size={4} shape={'circle'} color='key' style={{lineWidth: 1}}/>
                </Chart>
            </div>
        );
    }
}