import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Route } from "react-router-dom";
import "./LayoutFullScreen.scss";

const LayoutFullScreen = (props) => {
  const Component = props.component;
  return (
    <Route
      exact={props.exact}
      path={props.path}
      render={(props) => (
        <div className="LayoutFullScreen">
          {/* <Sidebar /> */}
          <Component {...props} />
        </div>
      )}
    />
  );
};

export default LayoutFullScreen;
