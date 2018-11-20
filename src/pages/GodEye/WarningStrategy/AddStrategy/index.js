import React, { Component } from "react";
import { Layout } from "antd";
const { Content } = Layout;

class AddStrategy extends Component {
  render() {
    return (
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        添加策略页面
      </Content>
    );
  }
}

export default AddStrategy;
