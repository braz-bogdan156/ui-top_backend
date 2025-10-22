🧱 Backend – Todo API (Nest.js)

Backend for the Todo Manager application.
Built with Nest.js + TypeScript and SQLite, providing a modular architecture for task and category management.

🛠 Tech Stack

🟢 Nest.js (Node.js + Express under the hood) — modular backend framework

🗄️ TypeORM + SQLite — database ORM and local storage

⚙️ TypeScript — static typing and clean architecture

🔐 dotenv — environment configuration

🚀 CORS + ConfigModule — secure configuration and cross-origin support

🚀 Functionality

Create, update, and delete tasks

Filter tasks by category

Mark tasks as completed

Limit of 5 tasks per category enforced on the backend

Get list of categories

Validation and clear error handling

🧩 API Endpoints
Method	Endpoint	Description
GET	/todos	Get all todos (optional ?category= filter)
POST	/todos	Create a new todo
PATCH	/todos/:id	Update todo status (completed / not)
DELETE	/todos/:id	Delete a todo
GET	/categories	Get list of categories
🧠 Project Structure
backend/
├─ src/
│  ├─ todos/
│  │  ├─ todo.entity.ts          # Todo entity definition
│  │  ├─ todos.controller.ts     # Controller (handles HTTP requests)
│  │  ├─ todos.service.ts        # Business logic and DB interaction
│  │  └─ todos.module.ts         # Module declaration
│  │
│  ├─ categories/
│  │  ├─ category.entity.ts      # Category entity
│  │  ├─ categories.controller.ts# Controller for categories
│  │  ├─ categories.service.ts   # Category business logic
│  │  └─ categories.module.ts    # Module declaration
│  │
│  ├─ app.controller.ts          # Root controller
│  ├─ app.module.ts              # Root application module
│  ├─ app.service.ts             # Shared application services
│  └─ main.ts                    # Application entry point
│
├─ .env                          # Environment variables
├─ .gitignore
├─ package.json
└─ tsconfig.json

⚙️ Setup & Run

Navigate to backend folder

cd backend


Install dependencies

npm install


Create .env file:

PORT=7000

FRONTEND_URL=http://localhost:3000


Run the server in development mode

npm run start:dev


The API will be available at 👉 http://localhost:7000

💡 Notes

Database: powered by SQLite via TypeORM

Architecture: fully modular (Todos + Categories)

Error handling: handled automatically by Nest Exception Filters