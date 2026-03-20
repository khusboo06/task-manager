# 🚀 TaskFlow – Full Stack Task Management System

TaskFlow is a modern full-stack task management application that helps users organize, track, and manage their daily tasks efficiently. It includes authentication, deadline tracking, and a responsive dashboard with a clean UI.

---

## 🌟 Features

### 🔐 Authentication

* User Registration & Login
* JWT-based authentication (Access & Refresh Tokens)
* Secure password hashing using bcrypt
* Protected routes

---

### 📝 Task Management

* Create, view, update, and delete tasks
* Toggle task completion
* Assign deadlines to tasks
* Real-time updates

---

### ⏰ Deadline Intelligence

* Displays task deadlines
* Smart status indicators:

  * ✅ On Track
  * ⚠️ Due Soon
  * ❌ Overdue
* Visual highlighting for urgent tasks

---

### 🔍 Advanced Features

* Search tasks by title
* Filter tasks (Completed / Pending)
* Pagination support
* Clean and structured dashboard

---

### 🎨 UI/UX

* Fully responsive design
* Modern UI with Tailwind CSS
* Glassmorphism styling
* Toast notifications for user feedback

---

## 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Axios
* React Hot Toast

### Backend

* Node.js
* Express.js
* TypeScript
* Prisma ORM

### Database

* MySQL

---



## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

---



Create `.env` file:

```env
DATABASE_URL="mysql://root:YOUR_PASSWORD@localhost:3306/taskdb"
JWT_SECRET="your_secret"
JWT_REFRESH_SECRET="your_refresh_secret"
```

Run database migration:

```bash
npx prisma migrate dev --name init
```

Start server:

```bash
npm run dev
```

---





## 🔐 API Endpoints

### Auth

* POST /auth/register
* POST /auth/login
* POST /auth/refresh
* POST /auth/logout

### Tasks

* GET /tasks
* POST /tasks
* PATCH /tasks/:id/toggle
* DELETE /tasks/:id

---

## 📊 Key Highlights

* Clean architecture (Controller → Service → Database)
* Secure authentication with JWT
* Prisma ORM for efficient database handling
* Deadline-based task tracking
* Scalable and maintainable code structure

---

## 🚀 Future Improvements

* Task priority levels (High / Medium / Low)
* Dark/Light mode toggle
* Calendar view for deadlines
* Notifications & reminders

