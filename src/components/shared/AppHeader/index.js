import React, { Component } from "react";
import LanguageSwitchBtn from "./partial/LanguageSwitchBtn";
import { FormattedMessage } from "react-intl";
import css from "./assets/Header.css";
import { Layout } from "antd/lib/index";
const { Header } = Layout;

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <span className={css.userName}>
          <FormattedMessage id="word" />
        </span>
        <LanguageSwitchBtn />
      </Header>
    );
  }
}

export default AppHeader;
