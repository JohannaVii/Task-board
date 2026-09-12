import express from "express";
import { tasks } from "../db/tasks.js";

const router = express.Router();

router.get("/", (request, response) => {
  response.json(tasks);
});

router.post("/", (request, response) => {
  const newTask = request.body;
  tasks.push(newTask);
  response.status(201).json(newTask);
});

export default router;
