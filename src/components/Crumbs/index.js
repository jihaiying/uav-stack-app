/*
* 面包屑组件
* @params
* data = {
*   crumbs: [ // 面包屑数据
*     {
*       word: "预警策略管理", // 文字
*       link: "/appHub/godEye/warningStrategy", // 链接
*     }
*   ],
*   descLink: "https://uavorg.github.io/documents/uavdoc_useroperation/28.html#%E5%88%9B%E5%BB%BA", // 当前页面使用说明链接
*   quit: true // 是否有退回按钮
* }
* */
import React, { Component } from "react";
import { Breadcrumb, Icon } from "antd";
import { withRouter, Link } from "react-router-dom";
import css from "./assets/index.css";

class Crumbs extends Component {
  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { data } = this.props;
    return (
      <div className={css.container}>
        <Breadcrumb separator=">" className={css.crumbs}>
          {data.crumbs.map(
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
          {data.descLink ? (
            <a href={data.descLink} target="_blank">
              <Icon
                type="question-circle"
                theme="outlined"
                className={css.descIcon}
              />
            </a>
          ) : null}
          {data.quit ? (
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

export default withRouter(Crumbs);
