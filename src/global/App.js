import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../components/Loading/index";
import { getToken } from "../lib/token";
const LoginComponent = Loadable({
  loader: () => import("../pages/Login/index"),
  loading: Loading
});
const AppHubComponent = Loadable({
  loader: () => import("../pages/AppHub/index"),
  loading: Loading
});
const GodEyeComponent = Loadable({
  loader: () => import("../pages/GodEye/index"),
  loading: Loading
});
const BetaTestComponent = Loadable({
  loader: () => import("../pages/BetaTest/index"),
  loading: Loading
});
const NoMatchComponent = Loadable({
  loader: () => import("../components/NoMatch/index"),
  loading: Loading
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
        <Route component={NoMatchComponent} />
      </Switch>
    );
  }
}

export default withRouter(App);
