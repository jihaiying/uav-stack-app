import React, { Component } from "react";
import { Button, Icon, Layout, Switch, Popconfirm, message, Input } from "antd";
import Crumbs from "../../../../components/Crumbs";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as warningStrategyActions from "../api";
import { connect } from "react-redux";
import css from "./StrategyList.css";
import cx from "classnames";
import TableComponent from "../../../../components/TableComponent";
import { strategyType, strategySystem } from "./filter";
const { Content } = Layout;

class StrategyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crumbsData: {
        crumbs: [
          {
            word: "预警策略管理"
          }
        ]
      },
      columns: [
        {
          title: "策略名称",
          dataIndex: "name",
          width: "35%",
          render: (text, record) => {
            let className;
            switch (text.type) {
              case 1:
                className = css.blue;
                break;
              case 2:
                className = css.green;
                break;
              case 3:
                className = css.cyan;
                break;
              case 4:
                className = css.purple;
                break;
              default:
                return className;
            }
            return (
              <Link to={"/"}>
                <div className={css.nameCon}>
                  <div className={cx(css.type, className)}>
                    {strategyType(text.type)}
                  </div>
                  {text.system && (
                    <div className={css.system}>
                      {strategySystem(text.system)}
                    </div>
                  )}
                  {text.example && (
                    <div className={css.example}>
                      <span className={css.exampleLabel}>实例组: </span>
                      {text.example}
                    </div>
                  )}
                  {text.appID && (
                    <div className={css.example}>
                      <span className={css.exampleLabel}>应用ID: </span>
                      {text.appID}
                    </div>
                  )}
                  {text.log && (
                    <div className={css.example}>
                      <span className={css.exampleLabel}>指定日志: </span>
                      {text.log}
                    </div>
                  )}
                </div>
              </Link>
            );
          }
        },
        {
          title: "描述",
          dataIndex: "desc",
          width: "16%",
          className: css.tdCon,
          render: (text, record) => {
            return (
              <Link to={"/"}>
                <span className={css.td}>{text}</span>
              </Link>
            );
          }
        },
        {
          title: "归属用户",
          dataIndex: "email",
          width: "16%",
          className: css.tdCon,
          render: (text, record) => {
            return (
              <Link to={"/"}>
                <span className={css.td}>{text}</span>
              </Link>
            );
          }
        },
        {
          title: "修改时间",
          dataIndex: "date",
          width: "16%",
          className: css.tdCon,
          render: (text, record) => {
            return (
              <Link to={"/"}>
                <span className={css.td}>{text}</span>
              </Link>
            );
          }
        },
        {
          title: "预警启停",
          width: "8%",
          dataIndex: "opened",
          className: css.tdCon,
          render: () => (
            <div style={{ paddingLeft: "6px" }}>
              <Switch
                checkedChildren={<Icon type="check" />}
                unCheckedChildren={<Icon type="close" />}
                defaultChecked
              />
            </div>
          )
        },
        {
          title: (
            <div>
              操作
              <Icon
                type="exclamation-circle"
                theme="filled"
                style={{ color: "#BBBBBB", marginLeft: "4px" }}
              />
            </div>
          ),
          key: "action",
          width: "9%",
          className: css.tdCon,
          render: () => (
            <div>
              <Link to={"/"}>
                <span className={css.operate}>复制</span>
              </Link>
              <Popconfirm
                placement="topRight"
                title="你确定删除这条配置吗？"
                onConfirm={this.delete}
                okText="确定"
                cancelText="取消"
                style={{ display: "inline-block" }}
              >
                <span className={css.operate}> 删除</span>
              </Popconfirm>
            </div>
          )
        }
      ]
    };
  }

  delete(id) {
    message.info("已删除" + id);
  }

  render() {
    const { actions } = this.props;
    const { crumbsData, columns } = this.state;
    return (
      <div>
        <Crumbs data={crumbsData} />
        <Content style={{ padding: "18px 10px" }}>
          <div>
            <Link to="/appHub/godEye/warningStrategy/add">
              <Button type="primary" style={{ float: "left" }}>
                <Icon type="plus" theme="outlined" />
                添加策略
              </Button>
            </Link>
            <Input.Search
              placeholder="以*结尾模糊检索"
              style={{ width: 334, float: "right" }}
              onSearch={value => console.log(value)}
            />
            <Button style={{ float: "right", marginRight: "8px" }}>
              <Icon type="appstore" />
              显示全部
            </Button>
            <div style={{ clear: "both" }} />
          </div>
          <TableComponent
            columns={columns}
            getTotalFunc={actions.getStrategyTotal}
            getDataFunc={actions.getStrategy}
            rowKey="id"
            reducedHeight={280}
          />
        </Content>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getStrategy: warningStrategyActions.getStrategy,
        getStrategyTotal: warningStrategyActions.getStrategyTotal
      },
      dispatch
    )
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StrategyList);
