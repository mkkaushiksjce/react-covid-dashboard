import React from "react";
import "./style.less";

// CSS Import for React-Vis
import "react-vis/dist/style.css";

// Component Imports
import Navbar from "./components/navbar/Navbar.js";
import Barchart from "./components/barchart/Barchart.js";
import Linechart from "./components/linechart/Linechart.js";
import sidenavbar from "./components/sidenavbar/Sidenavbar.js";
import Areachart from "./components/areachart/Areachart.js";

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
          <Areachart />
        </div>
      </div>
    );
  }
}

export default App;
