import React, { useState, useEffect } from "react";
import { ConfigProvider } from "antd";
import Login from "./pages/Login";
import UserManagement from "./pages/UserManagement";
import MainLayout from "./layouts/MainLayout";
import { getItem } from "./utils/storage";
import type { User } from "./types/user";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = getItem<User>("user");
    if (user) {
      setLoggedIn(true); // sessiya hələ keçməyib → login qalır
    }
  }, []);

  return (
    <ConfigProvider direction="ltr">
      {loggedIn ? (
        <MainLayout>
          <UserManagement />
        </MainLayout>
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </ConfigProvider>
  );
};

export default App;
