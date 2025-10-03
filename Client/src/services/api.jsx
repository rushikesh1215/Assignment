import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // ✅ send cookies automatically
});

export const login = (email, password) =>
  api.post("/v1/auth/login", { email, password });

export const register = (name, email, password, role) =>
  api.post("/v1/auth/register", { name, email, password, role });

export const logout = () =>
  api.post("/v1/auth/logout");

export const getTasks = () =>
  api.get("/v1/tasks");

export const addTask = (title, description) =>
  api.post("/v1/tasks", { title, description });

export const deleteTask = (id) =>
  api.delete(`/v1/tasks/${id}`);
export const updateTask = (id, title, description, status) =>
  api.put(`/tasks/${id}`, { title, description, status });