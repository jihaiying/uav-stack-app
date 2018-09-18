import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Download from "../Download";
import NoMatch from "../NoMatch";
import Home from "../Home";
import Product from "../Product";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/download" component={Download} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
