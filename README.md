# User Management CRUD Application

A React-based CRUD (Create, Read, Update, Delete) web application for managing user data.  
The application is designed with extensibility in mind using a schema-driven form structure.

---

## Features

- Create, Read, Update, Delete users
- Dynamic form rendering using schema configuration
- Input validation (required fields, regex patterns)
- Responsive UI (mobile & desktop)
- Clean and reusable component architecture

---

## Tech Stack / Tools Used

### Frontend
- React (Vite)
- Material UI (MUI)
- Axios
- JavaScript (ES6)

### Backend (Mock API)
- JSON Server

### Dev & Deployment
- Git & GitHub
- Vercel (Frontend)
- Render / Local JSON Server (Backend)

---

## Project Structure

Crud_project/
│
├── client/ # React frontend
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.js
│
├── server/ # JSON Server backend
│ ├── server.js
│ ├── db.json
│ └── package.json
│
└── README.md

---

## Prerequisites

- Node.js (v18+)
- npm or yarn
- Git

---

## Installation & Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/Harishna-K/Crud_project.git
cd Crud_project
```
## Run Backend using JSON Server (Local)

The backend uses **JSON Server** as a mock REST API.

Make sure you run the command **inside the `server` folder**, where `db.json` is located.

### Command

```bash
cd server
npm install
npx json-server --watch db.json --port 3001
```
### Backend will run at:
```base
http://localhost:3001/users
```
### Run Frontend (React)
Open a new terminal:
```base
cd client
npm install
```
Create a .env file in the client folder:
```base
VITE_API_URL=http://localhost:3001/users
```
### Start the frontend:
```base
npm run dev
```
### Frontend will run at:
```base
http://localhost:5173
```
### API Endpoints
| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /users     | Fetch all users |
| POST   | /users     | Create user     |
| PUT    | /users/:id | Update user     |
| DELETE | /users/:id | Delete user     |

### Extensibility

Form fields are controlled via a schema configuration file.
To add a new field, only update the schema — no major UI changes required.

Author

Harishna K
Frontend / MERN Stack Developer

GitHub: https://github.com/Harishna-K
