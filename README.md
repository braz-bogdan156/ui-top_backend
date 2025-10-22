🧱 Backend – Todo API

Backend for the Todo Manager app.
Built with Node.js + Express and SQLite, it provides CRUD operations, category filtering, and business logic validation.

🛠 Tech Stack

🟢 Node.js + Express.js — REST API server

🗄️ SQLite + Sequelize — lightweight database

🧩 CORS + dotenv — cross-origin setup & environment variables

📘 TypeScript — type-safe backend logic

🚀 API Endpoints
Method	Endpoint	Description
GET	/todos	Get all todos (optional ?category= filter)
POST	/todos	Create a new todo
PATCH	/todos/:id	Update todo status (completed / not)
DELETE	/todos/:id	Delete a todo
GET	/categories	Get list of categories
⚙️ Business Logic

Each category can contain up to 5 tasks

If the limit is exceeded → returns 400 Bad Request

All endpoints handle validation and errors gracefully

🧩 Project Structure
backend/
├─ src/
│  ├─ db/              # SQLite database setup
│  ├─ models/          # Sequelize models (Todo, Category)
│  ├─ routes/          # Express routes
│  ├─ controllers/     # Request handlers
│  ├─ middleware/      # Error handling
│  └─ server.ts        # Main entry point
└─ package.json

⚙️ Setup & Run

Clone and install dependencies

cd backend
npm install


Create .env file:

PORT=7000
DATABASE_URL=./database.sqlite


Run the server:

npm run dev


API will be available at 👉 http://localhost:7000