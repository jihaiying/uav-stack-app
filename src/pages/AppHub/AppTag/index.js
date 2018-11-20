import React, { Component } from "react";
import { Link } from "react-router-dom";
import css from "./AppTag.css";

class AppTag extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={css.container}>
        <Link to={data.link}>
          <img src={data.icon} alt="appIcon" className={css.logo} />
        </Link>
        <p className={css.title}>{data.title}</p>
      </div>
    );
  }
}

export default AppTag;
