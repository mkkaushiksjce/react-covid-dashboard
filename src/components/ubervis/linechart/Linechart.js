import React from "react";
import "../../style.less";

/* import "react-vis/dist/style.css"; */

import { XYPlot, XAxis, YAxis, LineSeries } from "react-vis";

class Linechart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useCanvas: false
    };
  }

  render() {
    return (
      <div>
        <XYPlot width={300} height={300}>
          <XAxis
            title="X Axis"
            style={{
              line: { stroke: "#ADDDE1" },
              ticks: { stroke: "#ADDDE1" },
              text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 }
            }}
          />
          <YAxis title="Y Axis" />
          <LineSeries
            className="first-series"
            data={[
              { x: 1, y: 3 },
              { x: 2, y: 5 },
              { x: 3, y: 15 },
              { x: 4, y: 12 }
            ]}
            style={{
              strokeLinejoin: "round",
              strokeWidth: 4
            }}
          />
          <LineSeries className="second-series" data={null} />
          <LineSeries
            className="third-series"
            curve={"curveMonotoneX"}
            data={[
              { x: 1, y: 10 },
              { x: 2, y: 4 },
              { x: 3, y: 2 },
              { x: 4, y: 15 }
            ]}
            strokeDasharray="7, 3"
          />
        </XYPlot>
      </div>
    );
  }
}

export default Linechart;
