import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Spin } from "antd";
import Loadable from "react-loadable";
import { appData } from "./appData";
import { Layout } from "antd";
import LeftNav from "../../components/shared/LeftNav/index";
const WelcomeComponent = Loadable({
  loader: () => import("../../components/Welcome"),
  loading: Spin
});
const LogComponent = Loadable({
  loader: () => import("./Log"),
  loading: Spin
});
const WarningStrategyComponent = Loadable({
  loader: () => import("./WarningStrategy"),
  loading: Spin
});
const NoMatchComponent = Loadable({
  loader: () => import("../NoMatch"),
  loading: Spin
});

class GodEye extends Component {
  render() {
    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <LeftNav appData={appData} />
          <Switch>
            <Route exact path="/appHub/godEye/" component={WelcomeComponent} />
            <Route path="/appHub/godEye/log" component={LogComponent} />
            <Route
              path="/appHub/godEye/warningStrategy"
              component={WarningStrategyComponent}
            />
            <Route component={NoMatchComponent} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default GodEye;
