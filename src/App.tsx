import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Column from "./components/Column";
import TaskCard from "./components/TaskCard";
import NewTaskForm from "./components/NewTaskForm";
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

  const handleAddTask = async (newTaskData: Omit<Task, "id" | "status">) => {
    const newTask: Task = {
      id: Date.now(),
      ...newTaskData,
      status: "todo",
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
        setTasks([savedTask, ...tasks]);
      }
    } catch (err) {
      console.error("ERROR - Gick inte att spara", err);
    }
  };

  const handleDeleteTask = (id: number) => {
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

  const todoTasks = filteredTasks.filter((task) => task.status === "todo");
  const doingTasks = filteredTasks.filter((task) => task.status === "doing");
  const doneTasks = filteredTasks.filter((task) => task.status === "done");

  return (
    <div className="max-w-6xl mx-auto min-h-screen flex flex-col bg-gray-50 text-gray-800 shadow-md border-x border-gray-200">
      <div className="bg-[#0b192c] p-6 text-white text-center">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">
            Task board
          </h1>
          <p className="text-sm text-gray-300">Drift och statushantering</p>
        </header>
      </div>

      <div className="p-6 pt-6 pb-0">
        <NewTaskForm onAddTask={handleAddTask} />
      </div>

      <div className="px-6 pt-0 mb-5">
        <input
          type="text"
          placeholder="Sök här..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0b192c]"
        />
      </div>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pt-0 flex-1">
        <Column title="Todo">
          {todoTasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              category={task.category}
              assignee={task.assignee}
              priority={task.priority}
              onDelete={handleDeleteTask}
            />
          ))}
        </Column>

        <Column title="Doing">
          {doingTasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              category={task.category}
              assignee={task.assignee}
              priority={task.priority}
              onDelete={handleDeleteTask}
            />
          ))}
        </Column>

        <Column title="Done">
          {doneTasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              category={task.category}
              assignee={task.assignee}
              priority={task.priority}
              onDelete={handleDeleteTask}
            />
          ))}
        </Column>
      </main>

      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-500 border-t border-gray-200">
        <p>Drivs av React v 1.0.</p>
      </footer>
    </div>
  );
}
export default App;
