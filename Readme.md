# 📝 Task Manager App

A **full-stack MERN application** with **Authentication, Role-Based Access Control (RBAC), and Task Management**.  
Backend is built with **Node.js/Express + MongoDB**, and frontend with **React + Tailwind CSS + React Router**.

---

## 🚀 Features

- 🔐 **Authentication & Authorization**
  - User registration & login with JWT (stored in HTTP-only cookies)
  - Role-based access control (User vs Admin)
  - Password hashing with bcrypt

- 📝 **Task Management**
  - Create, Read, Update, Delete tasks
  - Users → manage only their tasks
  - Admin → manage all tasks

- 🌐 **API**
  - RESTful API with versioning (`/api/v1/...`)
  - Centralized error handling & validation
  - API tested with Postman

- 🎨 **Frontend**
  - React + React Router
  - Tailwind CSS styling
  - Protected routes for dashboard
  - Role-aware UI (Admin/User experience)
  - Toggle Login / Register forms

- ⚙️ **Scalability & Security**
  - Modular project structure (scalable for new modules)
  - JWT authentication in HTTP-only cookies
  - Input sanitization
  - Future ready → caching (Redis), logging, Docker deployment


