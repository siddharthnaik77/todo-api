import { Request, Response } from "express";
import {
  readTasks,
  appendTask,
  updateTaskFile,
  deleteTaskFile,
} from "../utils/fileStorage";

/**
 * Get all tasks
 */
export const getTasks = async (req: Request, res: Response) => {
  try {
    const { name, status } = req.query;

    let tasks = await readTasks();
    let filtered = [...tasks]; // clone
    
    if (name) {
      const n = String(name).toLowerCase();
      filtered = filtered.filter((t) => t.name.toLowerCase().includes(n));
    }
    if (status && status !== "All") {
      filtered = filtered.filter((t) => t.status === status);
    }

    return res.status(200).json(filtered);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Add a new task
 */
export const addTask = async (req: Request, res: Response) => {
  try {
    const { name, description, status } = req.body;

    const newTask = await appendTask({
      name,
      description,
      status: status || "Incomplete",
    });
    return res.status(201).json(newTask);
  } catch (error) {
    console.error("Error adding task:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Update a task
 */
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, status, description } = req.body;

    const ok = await updateTaskFile(Number(id), { name, status, description });
    if (!ok) return res.status(404).json({ message: "Task not found" });

    return res.json({ message: "Task updated" });
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Delete a task
 */
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const ok = await deleteTaskFile(Number(id));
    if (!ok) return res.status(404).json({ message: "Task not found" });

    return res.json({ message: "Task deleted" });
  } catch (error) {
    console.error("Error deleting task:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
