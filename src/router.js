import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import LayoutFullScreen from "./hoc/LayoutFullScreen/LayoutFullScreen";

export const useRoutes = (isUser) => {
  if (isUser) {
    return (
      <Switch>
        <Route path="/auth" component={Auth} />
        <LayoutFullScreen exact path="/Dashboard" component={Dashboard} />
        <Redirect from="/" to="/Dashboard" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Redirect from="/" to="/auth" />
      </Switch>
    );
  }
};
