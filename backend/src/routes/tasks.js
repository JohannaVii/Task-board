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

export default router;
