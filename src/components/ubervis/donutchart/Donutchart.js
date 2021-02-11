import React, { Component } from "react";
import "../../style.less";

/* import "react-vis/dist/style.css"; */

import { RadialChart, Hint } from "react-vis";

class Donutchart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    };
  }

  render() {
    const { value } = this.state;

    return (
      <RadialChart
        className={"donut-chart-example"}
        innerRadius={100}
        radius={140}
        getAngle={d => d.theta}
        data={[
          { theta: 2, className: "custom-class" },
          { theta: 6 },
          { theta: 2 },
          { theta: 3 },
          { theta: 1 }
        ]}
        onValueMouseOver={v => this.setState({ value: v })}
        onSeriesMouseOut={v => this.setState({ value: false })}
        width={300}
        height={300}
        padAngle={0.04}
      >
        {value !== false && <Hint value={value} />}
      </RadialChart>
    );
  }
}

export default Donutchart;
