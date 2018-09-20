import React, { Component } from "react";
import css from "./assets/ProductTab.css";
import { Link } from "react-router-dom";

class ProductTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    let site = null;
    if (data.site != null) {
      site = (
        <Link
          to={data.site}
          className={css.cover}
          style={{
            width: data.width + "px",
            backgroundColor: "cyan"
          }}
        >
          <span className={css.link}>查看详情</span>
        </Link>
      );
    } else {
      site = (
        <div
          className={css.cover}
          style={{
            width: data.width + "px",
            backgroundColor: "gray"
          }}
        >
          <span className={css.next}>敬请期待...</span>
        </div>
      );
    }

    return (
      <div
        className={css.container}
        style={{
          width: data.width + "px",
          backgroundImage: "url(" + data.bg + ")"
        }}
      >
        <div className={css.title}>{data.title}</div>
        {data.tips.map((item, key) => (
          <div className={css.tip}>{item}</div>
        ))}
        {site}
      </div>
    );
  }
}

export default ProductTab;
