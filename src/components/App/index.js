import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../shared/Loading";
const HomeComponent = Loadable({
  loader: () => import("../Home"),
  loading: Loading
});
const DownloadComponent = Loadable({
  loader: () => import("../Download"),
  loading: Loading
});
const NoMatchComponent = Loadable({
  loader: () => import("../NoMatch"),
  loading: Loading
});
const ProductComponent = Loadable({
  loader: () => import("../Product"),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/product" component={ProductComponent} />
          <Route path="/download" component={DownloadComponent} />
          <Route component={NoMatchComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
