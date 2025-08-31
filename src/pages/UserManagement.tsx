import React, { useState } from "react";
import { Row, Col, Input, Select, Button, message, Space } from "antd";
import { useTranslation } from "react-i18next";

import { useUsers } from "../hooks/useUsers";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import type { User } from "../types/user";

const UserManagement: React.FC = () => {
  const { t } = useTranslation();
  const { users, createUser, updateUser, deleteUser } = useUsers();
  const [searchText, setSearchText] = useState("");
  const [schoolFilter, setSchoolFilter] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(searchText.toLowerCase()) ||
      u.surname.toLowerCase().includes(searchText.toLowerCase());
    const matchesSchool = schoolFilter ? u.school === schoolFilter : true;
    return matchesSearch && matchesSchool;
  });

  const schoolOptions = Array.from(new Set(users.map((u) => u.school))).map(
    (s) => ({
      label: s,
      value: s,
    })
  );

  // CSV export function
  const exportCSV = () => {
    if (!users || users.length === 0) {
      message.warning("No users to export");
      return;
    }

    const csv = [
      ["ID", "Name", "Surname", "School", "Courses"],
      ...filteredUsers.map((u) => [
        u.id,
        u.name,
        u.surname,
        u.school,
        u.courses,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "users.csv";
    link.click();
  };

  return (
    <div style={{ padding: 20 }}>
      <Row gutter={[16, 16]} style={{ marginBottom: 10 }}>
        <Col xs={24} sm={12} md={6}>
          <Input
            placeholder={t("user.search")}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Select
            placeholder={t("user.filter")}
            allowClear
            style={{ width: "100%" }}
            value={schoolFilter || undefined}
            onChange={(value) => setSchoolFilter(value || null)}
            options={schoolOptions}
          />
        </Col>
        <Col xs={24} sm={24} md={12} style={{ textAlign: "right" }}>
          <Space>
            <Button
              type="primary"
              onClick={() => {
                setEditingUser(null);
                setModalVisible(true);
              }}
            >
              {t("user.create")}
            </Button>
            <Button onClick={exportCSV}>Export CSV</Button>
          </Space>
        </Col>
      </Row>

      <UserTable
        users={filteredUsers}
        onEdit={(u) => {
          setEditingUser(u);
          setModalVisible(true);
        }}
        onDelete={deleteUser}
      />

      <UserForm
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onSave={(values) =>
          editingUser ? updateUser(editingUser.id, values) : createUser(values)
        }
        initialValues={editingUser}
      />
    </div>
  );
};

export default UserManagement;
