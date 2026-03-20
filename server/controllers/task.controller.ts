import { Response } from "express";
import { AuthRequest } from "../types/express";
import {
  getTasksService,
  createTaskService,
  updateTaskService,
  toggleTaskService,
  deleteTaskService,
} from "../services/task.service";


export const getTasks = async (req: AuthRequest, res: Response) => {
  try {
    console.log("REQ.USER:", req.user);   
    console.log("QUERY:", req.query); 
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const tasks = await getTasksService(req.user.id, req.query);
    res.status(200).json(tasks);
  } catch (err) {
    console.error("GET TASK ERROR:", err); 
    res.status(500).json({ message: "Error fetching tasks" });
  }
};


export const createTask = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { title, deadline } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await createTaskService(
      req.user.id,
      title,
      deadline
    );

    res.status(201).json(task);
  } catch (err) {
    console.error("CREATE TASK ERROR:", err);
    res.status(500).json({ message: "Error creating task" });
  }
};


export const updateTask = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!req.body.title && !req.body.completed) {
      return res.status(400).json({ message: "Nothing to update" });
    }

    const task = await updateTaskService(
      +req.params.id,
      req.user.id,
      req.body
    );

    res.json(task);
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    res.status(404).json({ message: "Task not found" });
  }
};


export const toggleTask = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const task = await toggleTaskService(
      +req.params.id,
      req.user.id
    );

    res.json(task);
  } catch (err) {
    console.error("TOGGLE ERROR:", err);
    res.status(404).json({ message: "Task not found" });
  }
};


export const deleteTask = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await deleteTaskService(+req.params.id, req.user.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(404).json({ message: "Task not found" });
  }
};