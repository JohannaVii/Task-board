import express from "express";
import cors from "cors";
import taskRoutes from "./routes/tasks.js";

const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.listen(PORT, () => {
  console.log(`Servern körs på port ${PORT}`);
});
