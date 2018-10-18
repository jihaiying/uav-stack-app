import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "react-intl";
import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

class WarningStrategy extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <Layout>
        <Helmet
          title={
            formatMessage({
              id: "pageTitle"
            }).warningStrategy
          }
        />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>预警策略管理</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff", minHeight: 600 }}>
            预警策略管理内容
          </div>
        </Content>
      </Layout>
    );
  }
}

WarningStrategy.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(WarningStrategy);
