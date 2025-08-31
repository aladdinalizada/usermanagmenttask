import React from "react";
import { Table, Button, Space } from "antd";
import { useTranslation } from "react-i18next";
import type { User } from "../types/user";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserTable: React.FC<Props> = ({ users, onEdit, onDelete }) => {
  const { t } = useTranslation();

  const columns = [
    {
      title: t("user.table.id"),
      dataIndex: "id",
      fixed: "left" as const,
      width: 60,
    },
    {
      title: t("user.table.name"),
      dataIndex: "name",
      fixed: "left" as const,
      width: 120,
    },
    { title: t("user.table.surname"), dataIndex: "surname" },
    { title: t("user.table.school"), dataIndex: "school" },
    { title: t("user.table.courses"), dataIndex: "courses" },
    {
      title: t("user.table.action"),
      key: "action",
      render: (_: any, record: User) => (
        <Space>
          <Button onClick={() => onEdit(record)}>{t("user.edit")}</Button>
          <Button danger onClick={() => onDelete(record.id)}>
            {t("user.delete")}
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-2">
      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 800 }}
        rowClassName={() =>
          "transition-transform duration-200 hover:scale-105 hover:shadow-lg"
        }
      />
    </div>
  );
};

export default UserTable;
