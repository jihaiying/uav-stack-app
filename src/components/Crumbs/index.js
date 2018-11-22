/*
* 面包屑组件
* @params
* crumbs: [ // 面包屑数据
*   {
*     word: "预警策略管理", // 文字
*     link: "/appHub/godEye/warningStrategy", // 链接
*   }
* ]
* descLink: "https://uavorg.github.io/documents/uavdoc_useroperation/28.html#%E5%88%9B%E5%BB%BA" // 当前页面使用说明链接
* quit: true // 是否有退回按钮
* */
import React, { Component } from "react";
import { Breadcrumb, Icon } from "antd";
import { withRouter, Link } from "react-router-dom";
import css from "./Crumbs.css";
import PropTypes from "prop-types";

class Crumbs extends Component {
  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { crumbs, descLink, quit } = this.props;
    return (
      <div className={css.container}>
        <Breadcrumb separator=">" className={css.crumbs}>
          {crumbs.map(
            (item, key) =>
              item.link ? (
                <Breadcrumb.Item key={item.word}>
                  <Link to={item.link}>{item.word}</Link>
                </Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item key={item.word}>{item.word}</Breadcrumb.Item>
              )
          )}
        </Breadcrumb>
        <div className={css.right}>
          {descLink ? (
            <a href={descLink} target="_blank">
              <Icon
                type="question-circle"
                theme="outlined"
                className={css.descIcon}
              />
            </a>
          ) : null}
          {quit ? (
            <Icon
              type="arrow-right"
              theme="outlined"
              className={css.quitIcon}
              onClick={() => this.goBack()}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

Crumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  ).isRequired,
  descLink: PropTypes.string,
  quit: PropTypes.bool
};

Crumbs.defaultProps = {
  descLink: "",
  quit: false
};

export default withRouter(Crumbs);
