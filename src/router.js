import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Quiz from "./pages/Quiz/Quiz";
import Dashboard from "./pages/Dashboard/Dashboard";
import LayoutFullScreen from "./hoc/LayoutFullScreen/LayoutFullScreen";

export const useRoutes = (isUser) => {
  if (isUser) {
    return (
      <Switch>
        <Route path="/auth" component={Auth} />
        <LayoutFullScreen exact path="/Dashboard" component={Dashboard} />
        <Route path="/" component={Quiz} />
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
