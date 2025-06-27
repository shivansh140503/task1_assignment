<<<<<<< HEAD
# Flam HR Dashboard

An interactive, modern, and user-friendly HR Dashboard built using React, Vite, CSS, and Chart.js.

This project streamlines employee management, analytics, and reporting with a clean UI and real-time interactivity. Ideal for HR professionals to manage teams, track performance, and gain insights.

---

## Live Demo

* Visit Live App: [https://your-deployment-link.vercel.app](https://your-deployment-link.vercel.app)
* View GitHub Repo: [https://github.com/your-username/flam-hr-dashboard](https://github.com/your-username/flam-hr-dashboard)

---

## Features Overview

### 1. Home Page (`/`)

* Fetches real employee data from dummyjson.com
* Displays cards with:

  * Name, Email, Age, Department
  * Performance rating
  * View, Bookmark, Promote buttons
* Search + multi-filter by department and rating

### 2. Employee Details Page (`/employee/:id`)

* Detailed profile view: phone, address, rating, bio
* Performance history
* Tabbed UI: Overview, Projects, Feedback

### 3. Bookmark Manager (`/bookmarks`)

* View bookmarked employees
* Remove from bookmarks
* Simulate promote/assign actions
* Custon CSS used for styling instead of TailwindCSS

### 4. Analytics (`/analytics`)

* Chart.js-based:

  * Department-wise average ratings
  * Mock bookmark trends over time

### 5. Clean Code

* React Hooks (state, context, routing)
* LocalStorage for bookmarks
* Component-based structure

---

## Tech Stack

| Tool        | Purpose                     |
| ----------- | --------------------------- |
| React       | Frontend framework          |
| Vite        | Development and build tool  |
| CSS         | Styling and Layout          |
| Chart.js    | Interactive charts/graphs   |
| dummyjson   | Mock API for realistic data |
| Context API | Global state management     |

---

## Project Structure

```
src/
├── components/       # Header, Sidebar, Cards
├── pages/            # Home, Dashboard, EmployeeDetails, etc.
├── data/             # Static or mock data (if any)
├── context/          # BookmarkContext
├── App.jsx
└── main.jsx
```

---

## Setup & Run

```bash
# 1. Clone the repo
git clone https://github.com/your-username/flam-hr-dashboard.git
cd flam-hr-dashboard

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
http://localhost:5173/
```

---

## HR Use Case

This dashboard helps HR teams to:

* Easily track team structure and performance
* Manage and monitor high-potential employees
* Visualize growth metrics department-wise
* Quickly access employee details
* Run engagement analysis with real-time interactions

---

## Credits

* Dummy data: [https://dummyjson.com](https://dummyjson.com)
* Charting: [https://www.chartjs.org/](https://www.chartjs.org/)

---
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 8199971 (Dashboard updated)
