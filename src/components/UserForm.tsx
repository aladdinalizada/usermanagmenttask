import React from "react";
import { Modal, Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import type { User } from "../types/user";

interface Props {
  visible: boolean;
  onCancel: () => void;
  onSave: (user: Omit<User, "id">) => void;
  initialValues?: User | null;
}

const UserForm: React.FC<Props> = ({
  visible,
  onCancel,
  onSave,
  initialValues,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  return (
    <Modal
      title={initialValues ? t("user.edit") : t("user.create")}
      open={visible}
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then((values) => {
          onSave(values);
          form.resetFields();
          onCancel();
        });
      }}
    >
      <Form form={form} layout="vertical" initialValues={initialValues || {}}>
        <Form.Item
          name="name"
          label={t("user.table.name")}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="surname"
          label={t("user.table.surname")}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="school"
          label={t("user.table.school")}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="courses"
          label={t("user.table.courses")}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserForm;
