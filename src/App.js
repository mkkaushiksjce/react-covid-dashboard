import React from "react";
import "./style.less";

// CSS Import for React-Vis
import "react-vis/dist/style.css";

// Component Imports
import Navbar from "./components/navbar/Navbar.js";
import Barchart from "./components/barchart/Barchart.js";

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
        <Navbar />
        <h1>Mayaskara</h1>
        <Barchart />
      </div>
    );
  }
}

export default App;
