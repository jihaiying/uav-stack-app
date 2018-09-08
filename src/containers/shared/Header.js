import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Product from "../Product/Product";
import Download from "../Download/Download";
import NoMatch from "../NoMatch/NoMatch";

class Header extends Component {
  render() {
    return (
      <div>
        <Link to={"/"}>首页</Link>
        <Link to={"/product"}>产品</Link>
        <Link to={"/download"}>下载</Link>

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

export default Header;
