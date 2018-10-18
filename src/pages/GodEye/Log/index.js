import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "react-intl";
import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

class Log extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <Layout>
        <Helmet
          title={
            formatMessage({
              id: "pageTitle"
            }).log
          }
        />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>应用日志搜索</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff", minHeight: 600 }}>
            应用日志搜索内容
          </div>
        </Content>
      </Layout>
    );
  }
}

Log.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Log);
