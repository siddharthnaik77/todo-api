import express from "express";
import {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController";

const router = express.Router();

/**
 * GET /tasks - Get all tasks with optional filtering
 */
router.get("/", getTasks);
router.get("/:id", getTaskById);

/**
 * POST /tasks - Create a new task
 */
router.post("/", addTask);

/**
 * PUT /tasks/:id - Update a task
 */
router.put("/:id", updateTask);

/**
 * DELETE /tasks/:id - Delete a task
 */
router.delete("/:id", deleteTask);

export default router;
