# 📡 Task Manager API Documentation

This document describes all available **API routes** for the Task Manager backend.  
The API follows REST principles and uses versioning under `/api/v1/...`.  
Authentication is handled with **JWT tokens stored in HTTP-only cookies**.  

---

## 🔑 Authentication Routes

### 1. Register User
**POST** `/api/v1/auth/register`

- Registers a new user with role (`user` or `admin`).

### Request Body
 ```` 

{
  "name": "Pavan",
  "email": "pavan@example.com",
  "password": "123456",
  "role": "user"
}
````

### 2. Login User
**POST** `/api/v1/auth/register`

Logs in a user and sets a JWT token in an HTTP-only cookie.

#### Request Body
````
{
  "email": "pavan@example.com",
  "password": "123456"
}
````
## 📝 Task Routes

### 1. Get All Tasks
**GET** `/api/v1/tasks/`

- **User:** Returns only their own tasks  
- **Admin:** Returns all tasks  

#### Success Response
````
[
  {
    "id": "653f7ad81e3b2a0a9c567890",
    "title": "Finish project",
    "description": "Complete backend module",
    "status": "pending",
    "owner": "652f2bd01e3b2a0a9c123456"
  }
]
````
### 2. Create Task
**POST** `/api/v1/tasks`

Creates a new task. Requires authentication.

#### Request Body
````
{
  "title": "Write documentation",
  "description": "Prepare API docs for backend",
  "status": "in-progress"
}
````
### 3. Update Task
**PUT** `/api/v1/tasks/:id`

Updates a task by its ID.  
- **User:** Can update only their own tasks  
- **Admin:** Can update any task  

#### Request Body
````
{
  "title": "Finish backend module",
  "description": "Complete backend development",
  "status": "completed"
}
````
### 4. Delete Task
**DELETE** `/api/v1/tasks/:id`

Deletes a task by its ID.  
- **User:** Can delete only their own tasks  
- **Admin:** Can delete any task  

#### Success Response
````
{
  "message": "Deleted"
}
````
