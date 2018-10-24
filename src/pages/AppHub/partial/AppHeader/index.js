import React, { Component } from "react";
import LanguageSwitchBtn from "./partial/LanguageSwitchBtn";
import css from "./assets/Header.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { Layout, Icon } from "antd";
const { Header } = Layout;

class AppHeader extends Component {
  render() {
    return (
      <Header style={{ position: "fixed", width: "100%" }}>
        <div className={css.center}>
          <div className={css.left}>
            <img src={logo} alt="logo" className={css.logo} />
            <span className={css.title}>智能服务平台</span>
          </div>
          <div className={css.right}>
            <LanguageSwitchBtn />
            <Icon type="user" theme="outlined" className={css.userIcon} />
            <span className={css.userName}>haiyingji@creditease.cn</span>
            <Link to="/login">
              <span className={css.logout}>退出</span>
            </Link>
          </div>
        </div>
      </Header>
    );
  }
}

export default AppHeader;
