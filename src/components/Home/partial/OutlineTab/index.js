import React, { Component } from "react";
import css from "./assets/OutlineTab.css";
import outline from "./assets/Outline.png";

class OutlineTab extends Component {
  render() {
    return (
      <div className={css.container}>
        <div className={css.title}>全维度监控+应用运维解决方案</div>
        <div className={css.line} />
        <img className={css.img} src={outline} />
      </div>
    );
  }
}

export default OutlineTab;
