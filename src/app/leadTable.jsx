"use client";

import { sampleLeads } from "@/const/sampleData";
import { Switch, Table } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

// const { createRoot } = ReactDOM;
// const { useState } = React;
// const { Switch, Table } = antd;

const columns = [
  {
    title: "Index",
    dataIndex: "index",
    key: "index",
    fixed: "left",
    width: 80,
  },
  {
    title: "Lead Name",
    dataIndex: "leadName",
    key: "leadName",
    fixed: "left",
    width: 150,
  },
  {
    title: "Company",
    dataIndex: "companyName",
    key: "companyName",
    width: 150,
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
    width: 150,
  },
  {
    title: "Industry",
    dataIndex: "industary",
    key: "industary",
    width: 150,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 120,
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    key: "mobile",
    width: 130,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 180,
  },
  {
    title: "Source",
    dataIndex: "source",
    key: "source",
    width: 130,
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    width: 130,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    width: 100,
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
    width: 200,
    render: (text) => (
      <a href={text} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    ),
  },
  {
    title: "Follow-ups",
    dataIndex: "followUpCounter",
    key: "followUpCounter",
    width: 150,
    render: (count, record) => (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span>{count}</span>
        <button onClick={() => handleIncrement(record.id)}>+</button>
      </div>
    ),
  },
  {
    title: "Note",
    key: "note",
    width: 100,
    render: (_, record) => (
      <button onClick={() => showNotePopup(record.note)}>View Note</button>
    ),
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    width: 180,
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>Edit</a>,
  },
];

const dataSource = sampleLeads.map((lead, idx) => ({
  index: idx + 1,
  ...lead,
  createdAt: dayjs(lead.createdAt).format("YYYY-MM-DD HH:mm"),
  // key: lead.id,
  key: idx,
}));
export const ComponentDemo = () => {
  const [fixedTop, setFixedTop] = useState(false);
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      scroll={{ x: 1500 }}
      summary={() => (
        // <Table.Summary fixed={fixedTop ? "top" : "bottom"}>
        <Table.Summary.Row>
          <Table.Summary.Cell index={0} colSpan={2}>
            {/* <Switch
                checkedChildren="Fixed Top"
                unCheckedChildren="Fixed Top"
                checked={fixedTop}
                onChange={() => {
                  setFixedTop(!fixedTop);
                }}
              /> */}
          </Table.Summary.Cell>
          {/* <Table.Summary.Cell index={2} colSpan={8}>
              Scroll Context
            </Table.Summary.Cell> */}
          {/* <Table.Summary.Cell index={10}>Fix Right</Table.Summary.Cell> */}
        </Table.Summary.Row>
        // </Table.Summary>
      )}
      // antd site header height
      sticky={{ offsetHeader: 0 }}
    />
  );
};
