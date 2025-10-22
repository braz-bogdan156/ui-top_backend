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