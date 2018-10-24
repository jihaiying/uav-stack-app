import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "../../components/Loading";
import Loadable from "react-loadable";
import { appData } from "./appData";
import { Layout } from "antd";
import LeftNav from "../../components/shared/LeftNav/index";
const WelcomeComponent = Loadable({
  loader: () => import("../../components/Welcome"),
  loading: Loading
});
const LogComponent = Loadable({
  loader: () => import("../GodEye/Log"),
  loading: Loading
});
const WarningStrategyComponent = Loadable({
  loader: () => import("../GodEye/WarningStrategy"),
  loading: Loading
});
const NoMatchComponent = Loadable({
  loader: () => import("../NoMatch"),
  loading: Loading
});

class BetaTest extends Component {
  render() {
    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <LeftNav appData={appData} />
          <Switch>
            <Route exact path="/appHub/betaTest" component={WelcomeComponent} />
            <Route path="/appHub/betaTest/log" component={LogComponent} />
            <Route
              path="/appHub/betaTest/warningStrategy"
              component={WarningStrategyComponent}
            />
            <Route component={NoMatchComponent} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default BetaTest;
