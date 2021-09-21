import React, { Component } from "react";
import "./Layout.scss";
import Header from "../Header/Header";

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
