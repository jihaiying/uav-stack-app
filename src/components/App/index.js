import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import { Spin } from "antd";

import "antd/dist/antd.css";
const HomeComponent = Loadable({
  loader: () => import("../Home"),
  loading: Spin
});
const Log = Loadable({
  loader: () => import("../../pages/Log"),
  loading: Spin
});
const NoMatchComponent = Loadable({
  loader: () => import("../NoMatch"),
  loading: Spin
});
const ProductComponent = Loadable({
  loader: () => import("../Product"),
  loading: Spin
});

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/product" component={ProductComponent} />
          <Route path="/log" component={Log} />
          <Route component={NoMatchComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
