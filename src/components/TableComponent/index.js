/*
* 表格组件
* @param {Object[]} columns 列相关属性
*   @param {ReactNode|({ sortOrder, filters }) => ReactNode} columns[].title 列标题
*   @param {string} columns[].dataIndex 对应数据的属性名
*   @param {string|number} columns[].width 列宽度
*   @param {string} columns[].className 列的 className
*   @param {Function(text, record, index) {}} columns[].render 生成复杂数据的函数，参数分别为当前行值，当前行数据，行索引
* @param {any[]} dataSource 数据数组
* @param {string|Function(record):string} rowKey 行 key 对应的属性名
* @param {number} reducedHeight 使表格填充整个页面而不滑动需要减去的高度，即页面其他内容占据的高度
* @param {string} key React 需要的 key，如果已设置了唯一的 dataIndex，可忽略这个属性
* */

import React, { Component } from "react";
import css from "./assets/TableComponent.css";
import { Table } from "antd";
import { connect } from "react-redux";
import { Resizable } from "react-resizable";

const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;
  const style = {
    fontWeight: "bold",
    background: "#FFF",
    borderBottom: "2px solid #e8e8e8"
  };
  if (!width) {
    return <th {...restProps} style={style} />;
  }
  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} style={style} />
    </Resizable>
  );
};

class TableComponent extends Component {
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

  render() {
    const {
      columns,
      dataSource,
      rowKey,
      reducedHeight,
      winHeight
    } = this.props;

    const pagination = {
      size: "small",
      total: dataSource.length,
      showTotal: function() {
        return `总数 ${dataSource.length}`;
      },
      showSizeChanger: true,
      showQuickJumper: true
    };

    const columnsTreated = columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index)
      })
    }));

    columnsTreated.unshift({
      title: "",
      dataIndex: "",
      width: "30px"
    });

    const height =
      winHeight - reducedHeight > 300 ? winHeight - reducedHeight : 300;

    return (
      <Table
        style={{ marginTop: "10px" }}
        size="middle"
        rowClassName={css.tr}
        pagination={pagination}
        components={this.components}
        columns={columnsTreated}
        dataSource={dataSource}
        rowKey={rowKey}
        scroll={{ y: height }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    winHeight: state.globalReducer.get("winHeight")
  };
}

export default connect(mapStateToProps)(TableComponent);
