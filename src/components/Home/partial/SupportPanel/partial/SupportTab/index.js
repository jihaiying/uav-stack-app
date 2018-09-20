import React, { Component } from "react";
import css from "./assets/SupportTab.css";

class ProductTab extends Component {
  render() {
    const { data } = this.props;
    return (
      <div
        className={css.container}
        style={{
          width: data.width + "px"
        }}
      >
        <div className={css.title}>{data.title}</div>
        {data.tips.map((item, key) => (
          <div className={css.tip}>{item}</div>
        ))}
      </div>
    );
  }
}

export default ProductTab;
