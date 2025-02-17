/// <reference types="react-scripts" />

interface Todo {
  id: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  title: string;
  completed: boolean;
}

interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  userName: string;
  email: string;
  phone: string;
  website: string;
}
