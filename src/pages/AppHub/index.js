import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "react-intl";
import AppHeader from "../../components/shared/AppHeader";
import { Link } from "react-router-dom";
import appHubManageIcon from "./assets/appHubManageIcon.png";
import basicClusterManageIcon from "./assets/basicClusterManageIcon.png";
import componentTestingIcon from "./assets/componentTestingIcon.png";
import creditEaseTestIcon from "./assets/creditEaseTestIcon.png";
import godCompassIcon from "./assets/godCompassIcon.png";
import godEyesIcon from "./assets/godEyesIcon.png";
import privateBetaIcon from "./assets/betaTestIcon.png";
import serviceGovernanceManageIcon from "./assets/serviceGovernanceManageIcon.png";
import upgradeManageIcon from "./assets/upgradeManageIcon.png";
import { Layout, List, Avatar } from "antd";
const { Content } = Layout;
const data = [
  {
    title: "组件测试",
    icon: componentTestingIcon,
    link: "/appHub/godEye/log"
  },
  {
    title: "上帝之眼",
    icon: godEyesIcon,
    link: "/appHub/godEye"
  },
  {
    title: "AppHub 管理",
    icon: appHubManageIcon,
    link: "/appHub/godEye/log"
  },
  {
    title: "基础集群管理",
    icon: basicClusterManageIcon,
    link: "/appHub/godEye/log"
  },
  {
    title: "上帝罗盘",
    icon: godCompassIcon,
    link: "/appHub/godEye/log"
  },
  {
    title: "服务治理管理",
    icon: serviceGovernanceManageIcon,
    link: "/appHub/godEye/lifwefwefkfefjiog"
  },
  {
    title: "版本内测",
    icon: privateBetaIcon,
    link: "/appHub/betaTest"
  },
  {
    title: "升级管理",
    icon: upgradeManageIcon,
    link: "/appHub/godEye/log"
  },
  {
    title: "宜信测",
    icon: creditEaseTestIcon,
    link: "/appHub/godEye/log"
  }
];

class AppHub extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Helmet
          title={
            formatMessage({
              id: "pageTitle"
            }).appHub
          }
        />
        <AppHeader />
        <Layout>
          <Content>
            <div style={{ width: "600px", margin: "0 auto" }}>
              <List
                itemLayout="horizontal"
                dataSource={data}
                size="large"
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar src={item.icon} shape="square" size="large" />
                      }
                      title={<Link to={item.link}>{item.title}</Link>}
                    />
                  </List.Item>
                )}
              />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

AppHub.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(AppHub);
