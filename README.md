# Todo API

A simple Todo API built with Express and TypeScript, supporting both file-based and database storage modes.

## Features

- ✅ CRUD operations for tasks
- 🔄 Toggle between file-based and database storage
- 🔍 Filter tasks by name and status
- 📝 Task descriptions and status tracking

## Project Structure

```
src/
├── controllers/    # Request handlers
├── models/        # Sequelize models (for DB mode)
├── routes/        # Express routes
├── utils/         # File storage utilities
└── server.ts      # Main server file
```

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
USE_DB=false
NODE_ENV=development
```

Set `USE_DB=true` to use database mode (requires Sequelize and database setup).

## API Endpoints

### Get Tasks
- **GET** `/api/tasks`
- Query parameters: `name`, `status`

### Add Task
- **POST** `/api/tasks`
- Body: `{ name: string, description?: string, status?: string }`

### Update Task
- **PUT** `/api/tasks/:id`
- Body: `{ name?: string, description?: string, status?: string }`

### Delete Task
- **DELETE** `/api/tasks/:id`

## Running

```bash
# Development (with watch mode)
npm run dev

# Build
npm run build

# Production
npm start
```

## Dependencies

- `express` - Web framework
- `typescript` - Type safety
- `dotenv` - Environment variables
- `sequelize` - ORM (optional, for database mode)
