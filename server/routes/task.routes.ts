

import express from "express";
import { protect } from "../middleware/auth.middleware";
import {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
  updateTask, 
} from "../controllers/task.controller";

const router = express.Router();

router.use(protect);

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", updateTask); 
router.patch("/:id/toggle", toggleTask);
router.delete("/:id", deleteTask);

export default router;