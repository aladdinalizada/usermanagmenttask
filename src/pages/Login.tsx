import React, { useState } from "react";
import { Card, Form, Input, Button, message } from "antd";
import { useTranslation } from "react-i18next";
import { setItem } from "../utils/storage";
import type { User } from "../types/user";

interface Props {
  onLogin: () => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleLogin = (values: { username: string; password: string }) => {
    setLoading(true);

    setTimeout(() => {
      if (values.username && values.password) {
        message.success("Login successful!");

        // Dummy user data
        const user: User = {
          id: 1,
          name: values.username,
          surname: "",
          school: "",
          courses: "",
        };

        // 15 dəqiqəlik sessiya ilə localStorage-a yaz
        setItem("user", user, 15);

        onLogin();
      } else {
        message.error("Invalid credentials");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card title={t("login.title")} style={{ width: 350 }}>
        <Form layout="vertical" onFinish={handleLogin}>
          <Form.Item
            name="username"
            label={t("login.username")}
            rules={[{ required: true, message: t("login.usernameRequired") }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label={t("login.password")}
            rules={[{ required: true, message: t("login.passwordRequired") }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              {t("login.button")}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
