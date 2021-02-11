import React, { Component } from "react";
import "../../style.less";

/* import "react-vis/dist/style.css"; */

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas
} from "react-vis";

class StackedBarchart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useCanvas: false
    };
  }

  render() {
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    const content = useCanvas ? "TOGGLE TO SVG" : "TOGGLE TO CANVAS";
    return (
      <div>
        <XYPlot width={300} height={300} stackBy="y">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries data={[{ x: 0, y: 2 }, { x: 4, y: 5 }, { x: 7, y: 10 }]} />
          <BarSeries data={[{ x: 0, y: 3 }, { x: 4, y: 5 }, { x: 7, y: 11 }]} />
        </XYPlot>
      </div>
    );
  }
}

export default StackedBarchart;
