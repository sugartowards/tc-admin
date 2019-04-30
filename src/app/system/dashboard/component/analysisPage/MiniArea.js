/**
 * author            Suger
 * time              2018/8/29
 * class:            MiniArea
 * description:
 */
import React from "react";
import {Chart, Axis, Tooltip, Geom} from "bizcharts";
import autoHeight from "./autoHeight";
import "./MiniChart.css";

@autoHeight
export default class MiniArea extends React.PureComponent {

    render() {
        let {height, data} = this.props;
        let tooltip = ['x*y', (x, y) => ({name: x, value: y,})];
        return (
            <div className='miniChart' style={{height}}>
                <div className='chartContent'>
                    <Chart animate={true} height={height + 54} forceFit={true} data={data} padding={[36, 5, 30, 5]}>
                        <Axis name="x" label={false} line={false} tickLine={false} grid={false}/>
                        <Axis name="y" label={false} line={false} tickLine={false} grid={false}/>
                        <Tooltip showTitle={false} crosshairs={false}/>
                        <Geom type="area" position="x*y" color='#975FE4' tooltip={tooltip} shape="smooth"
                              style={{fillOpacity: 1}}/>
                    </Chart>
                </div>
            </div>
        );
    }
}