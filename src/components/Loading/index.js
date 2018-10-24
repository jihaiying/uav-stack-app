import React, { Component } from "react";
import { Spin } from "antd";

class Loading extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Spin />
      </div>
    );
  }
}

export default Loading;
