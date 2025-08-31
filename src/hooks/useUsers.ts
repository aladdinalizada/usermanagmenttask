import { useState } from "react";
import type { User } from "../types/user";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Michael",
      surname: "Holz",
      school: "Oxford",
      courses: "Math, Physics",
    },
    {
      id: 2,
      name: "Paula",
      surname: "Wilson",
      school: "Cambridge",
      courses: "Biology, Chemistry",
    },
    {
      id: 3,
      name: "Antonio",
      surname: "Moreno",
      school: "Harvard",
      courses: "History",
    },
    {
      id: 4,
      name: "Mary",
      surname: "Saveley",
      school: "MIT",
      courses: "Computer Science",
    },
    {
      id: 5,
      name: "Martin",
      surname: "Sommer",
      school: "Stanford",
      courses: "Philosophy",
    },
    {
      id: 6,
      name: "Laura",
      surname: "Gonzalez",
      school: "Yale",
      courses: "Economics",
    },
    {
      id: 7,
      name: "David",
      surname: "Brown",
      school: "Princeton",
      courses: "Literature",
    },
    {
      id: 8,
      name: "Sophia",
      surname: "Johnson",
      school: "Columbia",
      courses: "Art History",
    },
    {
      id: 9,
      name: "James",
      surname: "Davis",
      school: "UCLA",
      courses: "Sociology",
    },
    {
      id: 10,
      name: "Emma",
      surname: "Martinez",
      school: "NYU",
      courses: "Psychology",
    },
    {
      id: 11,
      name: "Oliver",
      surname: "Garcia",
      school: "Duke",
      courses: "Political Science",
    },
    {
      id: 12,
      name: "Isabella",
      surname: "Rodriguez",
      school: "Johns Hopkins",
      courses: "Nursing",
    },
  ]);

  const createUser = (data: Omit<User, "id">) => {
    setUsers((prev) => [...prev, { id: prev.length + 1, ...data }]);
  };

  const updateUser = (id: number, data: Partial<User>) => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...data } : u)));
  };

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return { users, createUser, updateUser, deleteUser };
}
