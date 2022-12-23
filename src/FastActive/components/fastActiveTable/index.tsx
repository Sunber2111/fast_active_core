import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FastActiveRowItem } from "../../types/fastActiveRowItem";
import fastActiveStreamEvent from "../../event/fastactive.event";

const columns: ColumnsType<FastActiveRowItem> = [
  {
    title: "Tên học viên",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Acitve khóa học",
    dataIndex: "courseNonActive",
    key: "courseNonActive",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Khóa học đã active",
    dataIndex: "courseActive",
    key: "courseActive",
    render: (text) => <a>{text}</a>,
  },
];

const FastActiveTable = () => {
  const paginationConfig = {
    onChange: (page: number) => {
      fastActiveStreamEvent.onPageChange(page);
      console.log(fastActiveStreamEvent.payloadFilter);
      
    },
  };
  return (
    <Table
      pagination={paginationConfig}
      columns={columns}
      dataSource={
        [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ] as any
      }
    />
  );
};

export default FastActiveTable;
