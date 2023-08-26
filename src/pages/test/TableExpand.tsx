import React from "react";
import { Table } from "antd";

interface DataSourceItem {
  key: string;
  name: string;
  age: number;
  address: string;
  description: string;
  children?: DataSourceItem[];
}

const dataSource: DataSourceItem[] = [
  {
    key: "1",
    name: "John",
    age: 32,
    address: "New York",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    children: [
      {
        key: "11",
        name: "John",
        age: 32,
        address: "New York",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        children: [
          {
            key: "111",
            name: "John",
            age: 32,
            address: "New York",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      },
    ],
  },
  {
    key: "2",
    name: "Jane",
    age: 28,
    address: "San Francisco",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    key: "3",
    name: "Jane",
    age: 28,
    address: "San Francisco",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    key: "4",
    name: "Jane",
    age: 28,
    address: "San Francisco",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    key: "5",
    name: "Jane",
    age: 28,
    address: "San Francisco",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    key: "6",
    name: "Jane",
    age: 28,
    address: "San Francisco",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    key: "7",
    name: "Jane",
    age: 28,
    address: "San Francisco",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    key: "8",
    name: "Jane",
    age: 28,
    address: "San Francisco",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    key: "9",
    name: "Jane",
    age: 28,
    address: "San Francisco",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // ...more data
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (text: string, record: DataSourceItem) => (
      <div>
        <p>{text}</p>
        <p>Key: {record.key}</p>
      </div>
    ),
  },
];

const TableExpand: React.FC = () => {
  return <Table dataSource={dataSource} columns={columns} bordered={true} />;
};

export default TableExpand;
