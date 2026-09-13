import express from "express";
import { getTasks, saveTasks } from "../db/tasks.js";

const router = express.Router();

router.get("/", (request, response) => {
  const tasks = getTasks();
  response.json(tasks);
});

router.post("/", (request, response) => {
  const tasks = getTasks();
  const newTask = request.body;

  tasks.push(newTask);
  saveTasks(tasks);

  response.status(201).json(newTask);
});

router.delete("/:id", (request, response) => {
  const tasks = getTasks();
  const taskId = Number(request.params.id);
  const updatedTasks = tasks.filter((task) => task.id !== taskId);

  saveTasks(updatedTasks);
  response.status(200).json({ message: "Task deleted!" });
});

export default router;
