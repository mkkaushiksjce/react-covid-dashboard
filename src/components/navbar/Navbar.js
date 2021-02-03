import React, { Component } from "react";
import "./navbar.less";
import "../../style.less";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar-wrap">
        <div className="viewport">
          <div id="logo" href="/">
            Covid Dashboard
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
