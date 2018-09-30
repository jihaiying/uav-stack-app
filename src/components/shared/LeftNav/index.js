import React, { Component } from "react";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";
import img from "./assets/godEyeIco.png";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Sider } = Layout;

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" style={{ height: "32px", margin: "16px" }}>
          <img src={img} style={{ height: "32px", width: "32px" }} /> 上帝之眼
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
          <Menu.Item key="9">
            <Icon type="file" />
            <span>调用链跟踪</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

LeftNav.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(LeftNav);
