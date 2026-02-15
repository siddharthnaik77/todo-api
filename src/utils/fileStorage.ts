import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(__dirname, "../../data/tasks.json");

export interface FileTask {
  id: number;
  name: string;
  description?: string;
  status: string;
}

/**
 * Read all tasks from file
 */
export async function readTasks(): Promise<FileTask[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist or is empty
    return [];
  }
}

/**
 * Append a new task to file
 */
export async function appendTask(task: Omit<FileTask, "id">): Promise<FileTask> {
  const tasks = await readTasks();
  const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  const newTask: FileTask = { id: newId, ...task };
  tasks.push(newTask);
  await fs.writeFile(DATA_FILE, JSON.stringify(tasks, null, 2));
  return newTask;
}

/**
 * Update a task in file
 */
export async function updateTaskFile(
  id: number,
  updates: Partial<Omit<FileTask, "id">>
): Promise<boolean> {
  const tasks = await readTasks();
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;

  tasks[index] = { ...tasks[index], ...updates };
  await fs.writeFile(DATA_FILE, JSON.stringify(tasks, null, 2));
  return true;
}

/**
 * Delete a task from file
 */
export async function deleteTaskFile(id: number): Promise<boolean> {
  const tasks = await readTasks();
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  await fs.writeFile(DATA_FILE, JSON.stringify(tasks, null, 2));
  return true;
}
