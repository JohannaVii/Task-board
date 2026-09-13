import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "tasks.json");

export const getTasks = () => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error", err);
    return [];
  }
};

export const saveTasks = (tasks) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), "utf8");
  } catch (err) {
    console.error("Error", err);
  }
};
