import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      login: {
        title: "Login",
        username: "Username",
        password: "Password",
        button: "Login",
      },
      user: {
        create: "Create",
        edit: "Edit",
        delete: "Delete",
        search: "Search by name or surname",
        filter: "Filter by school",
        table: {
          id: "ID",
          name: "Name",
          surname: "Surname",
          school: "School",
          courses: "Subscribed Courses",
          action: "Action",
        },
      },
    },
  },
  ru: {
    translation: {
      login: {
        title: "Вход",
        username: "Имя пользователя",
        password: "Пароль",
        button: "Войти",
      },
      user: {
        create: "Создать",
        edit: "Редактировать",
        delete: "Удалить",
        search: "Поиск по имени или фамилии",
        filter: "Фильтр по школе",
        table: {
          id: "ID",
          name: "Имя",
          surname: "Фамилия",
          school: "Школа",
          courses: "Курсы",
          action: "Действие",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default
  interpolation: { escapeValue: false },
});

export default i18n;
