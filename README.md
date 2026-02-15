# Todo API

A simple Todo API built with Express and TypeScript, allowing users to manage their tasks efficiently with persistent file-based storage.

## Features

- ✅ Create, read, update, and delete tasks
- 📝 Task management with descriptions and status tracking
- 💾 Persistent file-based storage using JSON
- 🚀 Built with Express.js and TypeScript
- 🔄 CORS enabled for cross-origin requests
- 🛠️ Environment configuration support

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory (optional):
```env
PORT=3000
NODE_ENV=development
```

## Project Structure

```
todo-api/
├── src/
│   ├── server.ts                 # Express server setup
│   ├── controllers/
│   │   └── taskController.ts     # Task request handlers
│   ├── models/
│   │   └── task.ts               # Task data model
│   ├── routes/
│   │   └── taskRoutes.ts         # Task API routes
│   └── utils/
│       └── fileStorage.ts        # File storage utilities
├── data/
│   └── tasks.json                # Tasks database
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

## Available Scripts

### Development
Run the server in development mode with hot reload:
```bash
npm run dev
```

### Build
Compile TypeScript to JavaScript:
```bash
npm run build
```

### Production
Run the compiled server:
```bash
npm start
```

### Test
Run tests (currently not configured):
```bash
npm test
```

## API Endpoints

### Tasks

- **GET** `/api/tasks` - Get all tasks
- **POST** `/api/tasks` - Create a new task
- **GET** `/api/tasks/:id` - Get a specific task
- **PUT** `/api/tasks/:id` - Update a task
- **DELETE** `/api/tasks/:id` - Delete a task

## Technologies Used

- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

## Development Dependencies

- **ts-node** - Execute TypeScript directly
- **nodemon** - Auto-restart on file changes
- **@types/*** - TypeScript type definitions

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. The server will be running on `http://localhost:3000` (or the port specified in `.env`)

## License

ISC