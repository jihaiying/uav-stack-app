import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import godEyeIco from "./assets/godEyeIco.png";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import css from "./assets/LeftNav.css";

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
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className={css.logoCon}>
          <img src={godEyeIco} className={css.logoImg} />
          {!collapsed && <span className={css.logoWord}>上帝之眼</span>}
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>应用监控</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>应用日志搜索</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="file" />
            <span>调用链跟踪</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="tool" />
            <span>浏览器跟踪</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="warning" />
            <span>应用容器监控</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="form" />
            <span>预警记录查询</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default LeftNav;
