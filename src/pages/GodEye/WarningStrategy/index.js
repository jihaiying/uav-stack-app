import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "react-intl";
import { Layout, Breadcrumb } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as warningStrategyActions from "../../../actions/api/warningStrategy";
import { Table } from "antd";
import { Resizable } from "react-resizable";
const { Content } = Layout;

const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};

class WarningStrategy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: [
        {
          title: "策略",
          dataIndex: "name",
          width: 100
        },
        {
          title: "描述",
          dataIndex: "desc",
          width: 500
        },
        {
          title: "归属用户",
          dataIndex: "email",
          width: 150
        },
        {
          title: "修改时间",
          dataIndex: "date",
          width: 250
        },
        {
          title: "",
          key: "action",
          render: () => <a href="javascript:;">✕</a>
        }
      ]
    };
  }

  components = {
    header: {
      cell: ResizeableTitle
    }
  };

  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width
      };
      return { columns: nextColumns };
    });
  };

  componentDidMount() {
    this.getStrategy();
  }

  getStrategy() {
    const { actions } = this.props;
    const params = {};
    actions.getStrategy(params, ({ response }) => {
      this.setState({
        data: response
      });
    });
  }
  render() {
    const { formatMessage } = this.props.intl;
    const { data } = this.state;
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index)
      })
    }));
    return (
      <Layout>
        <Helmet
          title={formatMessage({
            id: "pageTitle.warningStrategy"
          })}
        />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>预警策略管理</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff", minHeight: 600 }}>
            <Table
              bordered
              components={this.components}
              columns={columns}
              dataSource={data}
            />
          </div>
        </Content>
      </Layout>
    );
  }
}

WarningStrategy.propTypes = {
  intl: intlShape.isRequired
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getStrategy: warningStrategyActions.getStrategy
      },
      dispatch
    )
  };
}
export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WarningStrategy)
);
