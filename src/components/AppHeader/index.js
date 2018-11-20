import React, { Component } from "react";
import LanguageSwitchBtn from "./LanguageSwitchBtn/";
import css from "./AppHeader.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { Layout, Icon } from "antd";
const { Header } = Layout;

class AppHeader extends Component {
  render() {
    return (
      <Header className={css.container}>
        <Link to="/appHub">
          <div className={css.left}>
            <img src={logo} alt="logo" className={css.logo} />
            <span className={css.title}>智能服务平台</span>
          </div>
        </Link>
        <div className={css.right}>
          <LanguageSwitchBtn />
          <Icon type="user" theme="outlined" className={css.userIcon} />
          <span className={css.userName}>haiyingji@creditease.cn</span>
          <div className={css.logout}>
            <Icon type="logout" theme="outlined" className={css.logoutIcon} />
            <span className={css.logoutWord}>退出</span>
          </div>
        </div>
      </Header>
    );
  }
}

export default AppHeader;
