# 🚀 React + Vite + TypeScript + Ant Design User Management

A professional **React + Vite + TypeScript** project for managing users with login authentication, multilingual support, and responsive design.

---

## ✨ Features

- 🔐 **Login Page** (mock authentication)
- 📋 **User Management** with CRUD (Create, Read, Update, Delete)
- 🔎 **Search & Filter** users by name and school
- 🌍 **Internationalization (English + Russian)** with `react-i18next`
- 📱 **Responsive UI** (ID & Name columns fixed, others scrollable)
- 🎨 Styled using **Ant Design**
- 📦 Clean and scalable folder structure

---

## 📂 Project Structure

```md
src/
│── assets/ # Static assets (images, icons, etc.)
│
│── components/ # Reusable UI components
│ ├── LanguageSwitcher.tsx # Dropdown for switching language
│ ├── UserForm.tsx # Modal form for Create/Edit user
│ └── UserTable.tsx # Table with fixed columns & actions
│
│── hooks/ # Custom React hooks
│ └── useUsers.ts # CRUD logic for users
│
│── layouts/ # Layout components
│ └── MainLayout.tsx # App layout with header & footer
│
│── pages/ # Application pages
│ ├── Login.tsx # Login page
│ └── UserManagement.tsx # Main user management page
│
│── types/ # TypeScript type definitions
│ └── user.ts # User interface
│
│── utils/ # Utility functions
│ └── storage.ts # LocalStorage helpers (auth token)
│
│── i18n.ts # i18next configuration (English & Russian)
│── App.tsx # Root app with routes
│── main.tsx # Application entry point
│── index.css # Global styles
```

## ⚡ Getting Started

Follow these steps to set up and run the project on your local machine.

---

### ✅ Requirements

Before you begin, make sure you have installed:

- [Node.js](https://nodejs.org/) **v18 or later**
- [npm](https://www.npmjs.com/) **v9 or later**
- Recommended editor: [Visual Studio Code](https://code.visualstudio.com/)
- Git for version control

---

### 📥 1. Clone the Repository

```bash
git clone https://github.com/yourusername/user-management-antd.git
cd user-management-antd
```

### 📦 2. Install Dependencies

```bash
npm install
```

### ▶️ 3. Start the Development Server

```bash
npm run dev
```

### 🏗️ 4. Build for Production

```bash
npm run build

```

### 🌍 6. Login & Languages

- Navigate to `/login` and log in with **any username & password** (mock authentication).
- After login, you will be redirected to the **User Management** page.
- Use the **language switcher** in the header to toggle between:
  - 🇬🇧 **English**
  - 🇷🇺 **Russian**

---

## 📋 User Management Features

- ➕ **Add Users** via modal form
- ✏️ **Edit Users** inline with modal
- ❌ **Delete Users** with confirmation
- 📑 **Pagination** (10 users per page)
- 🔎 **Search by name or surname**
- 🏫 **Filter by school**
- 📱 **Responsive table** with fixed ID & Name columns

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Ant Design](https://ant.design/)
- [i18next](https://www.i18next.com/)
- [React-i18next](https://react.i18next.com/)
- [React Router](https://reactrouter.com/)
