/**
 * author            Suger
 * time              2018/8/29
 * class:            MiniBar
 * description:
 */
import React from "react";
import {Chart, Tooltip, Geom} from "bizcharts";
import autoHeight from "./autoHeight";
import "./MiniChart.css";

@autoHeight
export default class MiniBar extends React.Component {

    render() {
        let {height, data} = this.props;
        let tooltip = ['x*y', (x, y) => ({name: x, value: y})];
        return (
            <div className='miniChart' style={{height}}>
                <div className='chartContent'>
                    <Chart height={height + 54} forceFit={true} data={data} padding={[36, 5, 30, 5]}>
                        <Tooltip showTitle={false} crosshairs={false}/>
                        <Geom type="interval" position="x*y" color='#1890FF' tooltip={tooltip}/>
                    </Chart>
                </div>
            </div>
        );
    }
}
