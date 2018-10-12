import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "react-intl";
import LeftNav from "../../components/shared/LeftNav";
import { Layout, Breadcrumb, Button, Timeline } from "antd";

class Log extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    const { Header, Content, Footer } = Layout;
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
                <Breadcrumb.Item>日志搜索</Breadcrumb.Item>
                <Breadcrumb.Item>XXX</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: "#fff", minHeight: 600 }}>
                <Button type="primary">Primary</Button>
                <Button style={{ marginLeft: "16px" }}>Default</Button>
                <Button type="dashed" style={{ marginLeft: "16px" }}>
                  Dashed
                </Button>
                <Button type="danger" style={{ marginLeft: "16px" }}>
                  Danger
                </Button>
                <br />
                <br />
                <Timeline>
                  <Timeline.Item>
                    Create a services site 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>
                    Solve initial network problems 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                  <Timeline.Item>
                    Network problems being solved 2015-09-01
                  </Timeline.Item>
                </Timeline>
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
