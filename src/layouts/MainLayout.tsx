import React from "react";
import { Layout } from "antd";
import LanguageSwitcher from "../components/LanguageSwitcher";

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="flex justify-between items-center">
        <h1 className="text-white text-lg">User Management</h1>

        <LanguageSwitcher />
      </Header>
      <Content style={{ margin: "20px" }}>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        © 2025{" "}
        <a href="https://www.linkedin.com/in/aladdinalizada/" target="_blank">
          Aladdin Alizada
        </a>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
