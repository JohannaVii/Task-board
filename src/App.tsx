import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router";
import { TaskBoardPage } from "./pages/TaskBoardPage";
import { NewTaskPage } from "./pages/NewTaskPage";
import type { Task } from "./types/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("ERROR - Fel vid hämtning", err));
  }, []);

  const handleAddTask = async (newTaskData: Omit<Task, "id">) => {
    const newTask: Task = {
      id: Date.now(),
      ...newTaskData,
    };

    try {
      const response = await fetch("http://localhost:3001/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const savedTask = await response.json();
        setTasks((prevTasks) => [savedTask, ...prevTasks]);
      }
    } catch (err) {
      console.error("ERROR - Gick inte att spara", err);
    }
  };

  const handleDeleteTask = (id: number) => {
    fetch(`http://localhost:3001/api/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    const term = searchTerm.toLowerCase();

    return (
      task.title.toLowerCase().includes(term) ||
      task.description.toLowerCase().includes(term) ||
      task.category.toLowerCase().includes(term) ||
      task.assignee.toLowerCase().includes(term) ||
      task.priority.toLowerCase().includes(term)
    );
  });

  return (
    <div className="max-w-6xl mx-auto min-h-screen flex flex-col bg-gray-50 text-gray-800 shadow-md border-x border-gray-200">
      <header className="bg-[#0b192c] p-6 text-white flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">
            Task board
          </h1>
          <p className="text-sm text-gray-300">Drift och statushantering</p>
        </div>
        <nav className="flex gap-4">
          <Link
            to="/"
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            Hem
          </Link>
          <Link
            to="/new-task"
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            Ny task
          </Link>
        </nav>
      </header>

      <div className="flex-1 flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <TaskBoardPage
                tasks={filteredTasks}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onDelete={handleDeleteTask}
              />
            }
          />

          <Route
            path="/new-task"
            element={<NewTaskPage onAddTask={handleAddTask} />}
          />
        </Routes>
      </div>

      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-500 border-t border-gray-200">
        <p>Drivs av React v 1.0.</p>
      </footer>
    </div>
  );
}
export default App;
