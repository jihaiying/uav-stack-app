import React from "react";
import { Spin } from "antd";

function Loading() {
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

export default Loading;
