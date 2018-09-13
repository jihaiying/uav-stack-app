import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "../../Home";
import Product from "../../Product";
import Download from "../../Download/";
import NoMatch from "../../NoMatch";
import LanguageSwitchBtn from "./partial/LanguageSwitchBtn";
import { FormattedMessage } from "react-intl";

class Header extends Component {
  render() {
    return (
      <div>
        <Link to={"/"}>
          <FormattedMessage id="home" />
        </Link>
        <Link to={"/product"}>
          <FormattedMessage id="product" />
        </Link>
        <Link to={"/download"}>
          <FormattedMessage id="download" />
        </Link>
        <LanguageSwitchBtn />
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
