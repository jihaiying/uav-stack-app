import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Loadable from "react-loadable";
import { Spin } from "antd";
import "antd/dist/antd.css";
import { getToken } from "../../lib/token";
const LoginComponent = Loadable({
  loader: () => import("../../pages/Login"),
  loading: Spin
});
const AppHubComponent = Loadable({
  loader: () => import("../../pages/AppHub"),
  loading: Spin
});
const GodEyeComponent = Loadable({
  loader: () => import("../../pages/GodEye"),
  loading: Spin
});
const BetaTestComponent = Loadable({
  loader: () => import("../../pages/BetaTest"),
  loading: Spin
});
const LogComponent = Loadable({
  loader: () => import("../../pages/GodEye/Log"),
  loading: Spin
});
const NoMatchComponent = Loadable({
  loader: () => import("../../pages/NoMatch"),
  loading: Spin
});

class App extends Component {
  componentDidMount() {
    if (!getToken()) {
      // this.props.history.push("/login");
    }
  }

  render() {
    return (
      <Switch>
        <Route path="/login" component={LoginComponent} />
        <Route exact path="/appHub" component={AppHubComponent} />
        <Route path="/appHub/godEye" component={GodEyeComponent} />
        <Route path="/appHub/betaTest" component={BetaTestComponent} />
        <Route path="/appHub/log" component={LogComponent} />
        <Route component={NoMatchComponent} />
      </Switch>
    );
  }
}

export default withRouter(App);
