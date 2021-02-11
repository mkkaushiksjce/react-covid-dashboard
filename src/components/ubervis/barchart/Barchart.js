import React from "react";
import "../../style.less";

/* import "react-vis/dist/style.css"; */

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from "react-vis";

class Barchart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useCanvas: false
    };
  }

  render() {
    const greenData = [{ x: "A", y: 10 }, { x: "B", y: 5 }, { x: "C", y: 15 }];

    const blueData = [{ x: "A", y: 12 }, { x: "B", y: 2 }, { x: "C", y: 11 }];

    const labelData = greenData.map((d, idx) => ({
      x: d.x,
      y: Math.max(greenData[idx].y, blueData[idx].y)
    }));

    const { useCanvas } = this.state;
    const content = useCanvas ? "TOGGLE TO SVG" : "TOGGLE TO CANVAS";
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

    return (
      <div>
        <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
          <XAxis />
          <YAxis />
          <BarSeries className="vertical-bar-series-example" data={greenData} />
          <BarSeries data={blueData} />
          <LabelSeries data={labelData} />
        </XYPlot>
      </div>
    );
  }
}

export default Barchart;
