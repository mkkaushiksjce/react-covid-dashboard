import React, { Component } from "react";
import "../../style.less";

/* import "react-vis/dist/style.css"; */

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  AreaSeries
} from "react-vis";

class Areachart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <XYPlot width={300} height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <AreaSeries
            className="area-series-example"
            curve="curveNatural"
            data={[
              { x: 0, y: 0 },
              { x: 1, y: 5 },
              { x: 2, y: 10 },
              { x: 3, y: 5 },
              { x: 4, y: 0 }
            ]}
          />
        </XYPlot>
      </div>
    );
  }
}

export default Areachart;
