import React, { Component } from "react";
import { Layout } from "antd";
const { Content } = Layout;

class Welcome extends Component {
  render() {
    return (
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        欢迎！
      </Content>
    );
  }
}

export default Welcome;
