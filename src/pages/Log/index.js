import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "react-intl";
import LeftNav from "../../components/shared/LeftNav";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Log extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Helmet
          title={
            formatMessage({
              id: "pageTitle"
            }).log
          }
        />
        <Layout style={{ minHeight: "100vh" }}>
          <LeftNav />
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

Log.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Log);
