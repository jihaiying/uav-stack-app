/*
* 左侧导航组件
* @params
* data = {
*   name: "上帝之眼", // 应用名
*   icon: "godEyesIcon", // 应用 Icon
*   menu: [ // 菜单数据
*     {
*       title: "应用日志搜索", // 菜单标题
*       icon: "desktop", // 菜单 Icon（antd Icon type 属性）
*       customIcon: "xigua", // 自定义菜单 Icon（iconfont 图标名）
*       link: "/appHub/godEye/log" // 菜单链接
*     }
*   ]
* }
* */
import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { Layout, Menu, Icon, Avatar } from "antd";
import css from "./assets/LeftNav.css";
import { NavLink, withRouter } from "react-router-dom";
import config from "../../config";

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { Sider } = Layout;
    const { collapsed } = this.state;
    const { data } = this.props;
    const MyIcon = Icon.createFromIconfontCN({
      scriptUrl: config.ICON_FONT_URL
    });
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        theme="light"
        width="164px"
        className={css.container}
        trigger={null}
      >
        {collapsed && (
          <Icon
            type="caret-right"
            theme="outlined"
            className={css.collapseIcon}
            onClick={this.toggle}
          />
        )}
        {!collapsed && (
          <Icon
            type="caret-left"
            theme="outlined"
            className={css.collapseIcon}
            onClick={this.toggle}
          />
        )}
        <div className={css.logoCon}>
          <Avatar src={data.icon} size="large" />
          {!collapsed && <span className={css.logoWord}>{data.name}</span>}
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[this.props.location.pathname]}
        >
          {data.menu.map((item, key) => (
            <Menu.Item key={item.link} style={{ margin: "0" }}>
              <NavLink to={item.link} className={css.aaa}>
                {item.icon ? (
                  <Icon type={item.icon} style={{ fontSize: "16px" }} />
                ) : null}
                {item.customIcon ? (
                  <MyIcon
                    type={"icon-" + item.customIcon}
                    style={{ fontSize: "16px" }}
                  />
                ) : null}
                <span className={css.menuName}>{item.title}</span>
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(LeftNav);
