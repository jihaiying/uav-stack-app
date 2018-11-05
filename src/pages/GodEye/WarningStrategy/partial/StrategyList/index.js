import React, { Component } from "react";
import { Button, Divider, Icon, Layout, Tag } from "antd";
import Crumbs from "../../../../../components/Crumbs";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { Resizable } from "react-resizable";
import { bindActionCreators } from "redux";
import * as warningStrategyActions from "../../../../../actions/api/warningStrategy";
import connect from "react-redux/es/connect/connect";
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

class StrategyList extends Component {
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
          render: () => <div style={{ cursor: "pointer" }}>✕</div>
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
        data: response.data
      });
    });
  }
  render() {
    const { data } = this.state;
    // const columns = this.state.columns.map((col, index) => ({
    //   ...col,
    //   onHeaderCell: column => ({
    //     width: column.width,
    //     onResize: this.handleResize(index)
    //   })
    // }));
    // const columns = this.state.columns;

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: text => <a href="javascript:;">{text}</a>
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: tags => (
          <span>
            {tags.map(tag => (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            ))}
          </span>
        )
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <a href="javascript:;">Invite {record.name}</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
        )
      }
    ];

    const data1 = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"]
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"]
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"]
      }
    ];
    const crumbsData = {
      crumbs: [
        {
          word: "预警策略管理"
        }
      ]
    };
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
            <div style={{ clear: "both" }} />
          </div>
          <div style={{ minHeight: 600 }}>
            {/*<Table columns={columns} dataSource={data1} />*/}
            {/*<Table*/}
            {/*// components={this.components}*/}
            {/*columns={columns}*/}
            {/*dataSource={data}*/}
            {/*// rowKey="id"*/}
            {/*/>*/}
          </div>
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
        getStrategy: warningStrategyActions.getStrategy
      },
      dispatch
    )
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StrategyList);
