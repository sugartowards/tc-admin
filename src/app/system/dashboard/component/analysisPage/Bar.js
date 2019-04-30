/**
 * author            Suger
 * time              2018/8/29
 * class:            Bar
 * description:
 */
import React from "react";
import {Chart, Axis, Tooltip, Geom} from "bizcharts";
import autoHeight from "./autoHeight";

@autoHeight
export default class Bar extends React.PureComponent {

    render() {
        let {height, data} = this.props;
        let tooltip = ['x*y', (x, y) => ({name: x, value: y})];
        return (
            <div style={{height}}>
                <Chart height={height} forceFit={true} data={data} padding='auto'>
                    <Axis name="x" title={false} label={true} tickLine={true}/>
                    <Axis name="y" title={false} line={false} tickLine={false} min={0}/>
                    <Tooltip showTitle={false} crosshairs={false}/>
                    <Geom type="interval" position="x*y" color='rgba(24, 144, 255, 0.85)' tooltip={tooltip}/>
                </Chart>
            </div>
        );
    }
}
