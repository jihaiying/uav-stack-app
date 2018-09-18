import React, { Component } from "react";
import { Link } from "react-router-dom";
import LanguageSwitchBtn from "./partial/LanguageSwitchBtn";
import { FormattedMessage } from "react-intl";
import css from "./assets/Header.css";

class Header extends Component {
  render() {
    return (
      <div className={css.container}>
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
      </div>
    );
  }
}

export default Header;
