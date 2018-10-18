import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { Layout, Menu, Icon, Avatar } from "antd";
import css from "./assets/LeftNav.css";
import { NavLink, withRouter } from "react-router-dom";

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { Sider } = Layout;
    const { collapsed } = this.state;
    const { appData } = this.props;
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className={css.logoCon}>
          <Avatar src={appData.icon} shape="square" size="large" />
          {!collapsed && <span className={css.logoWord}>{appData.name}</span>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={this.props.location.pathname}
        >
          {appData.menu.map((item, key) => (
            <Menu.Item key={item.link}>
              <NavLink to={item.link}>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(LeftNav);
