import React from "react";
import "./style.less";

// CSS Import for React-Vis
import "react-vis/dist/style.css";

// Component Imports
import Navbar from "/components/ubervis/navbar/Navbar.js";
import Barchart from "./components/ubervis/barchart/Barchart.js";
import Linechart from "./components/ubervis/linechart/Linechart.js";
import sidenavbar from "./components/ubervis/sidenavbar/Sidenavbar.js";
import Areachart from "./components/ubervis/areachart/Areachart.js";
import Donutchart from "./components/ubervis/donutchart/Donutchart.js";
import StackedBarchart from "./components/ubervis/stackedbarchart/StackedBarchart.js";

// Map Imports

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useCanvas: false
    };
  }

  render() {
    return (
      <div>
        {/*<Navbar />*/}
        <div>Mayaskara</div>

        <div>
          <StackedBarchart />
        </div>
      </div>
    );
  }
}

export default App;
