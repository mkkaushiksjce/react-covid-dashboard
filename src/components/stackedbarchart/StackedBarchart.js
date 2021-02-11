import React, { Component } from "react";
import "../../style.less";

/* import "react-vis/dist/style.css"; */

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
  HorizontalBarSeriesCanvas
} from "react-vis";

class StackedBarchart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useCanvas: false
    };
  }

  /* 
  Horizontal 
    <BarSeries data={[{ x: 0, y: 2 }, { x: 4, y: 5 }, { x: 7, y: 10 }]} />
    <BarSeries data={[{ x: 0, y: 3 }, { x: 4, y: 5 }, { x: 7, y: 11 }]} />  
  */

  render() {
    const { useCanvas } = this.state;
    // Option to change from horizontal or vertical
    // along with the data for horizontal (y, x)
    // Vertical (x, y)
    const BarSeries = useCanvas
      ? HorizontalBarSeriesCanvas
      : HorizontalBarSeries;
    const content = useCanvas ? "TOGGLE TO SVG" : "TOGGLE TO CANVAS";
    return (
      <div>
        <XYPlot width={300} height={300} stackBy="x">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries
            data={[{ y: 2, x: 10 }, { y: 4, x: 5 }, { y: 5, x: 15 }]}
          />
          <BarSeries
            data={[{ y: 2, x: 12 }, { y: 4, x: 2 }, { y: 5, x: 11 }]}
          />
        </XYPlot>
      </div>
    );
  }
}

export default StackedBarchart;
