import React from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Select
      defaultValue={i18n.language}
      style={{ width: 120 }}
      onChange={(lng) => i18n.changeLanguage(lng)}
      options={[
        { value: "en", label: "English" },
        { value: "ru", label: "Русский" },
      ]}
    />
  );
};

export default LanguageSwitcher;
