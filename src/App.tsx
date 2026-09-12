import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Column from "./components/Column";
import TaskCard from "./components/TaskCard";
import NewTaskForm from "./components/NewTaskForm";
import type { Task } from "./types/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Fixa felhantering",
      description: "Visa felmeddelanden om fälten är tomma.",
      category: "UI",
      assignee: "Frontend-utvecklare",
      priority: "Hög",
      status: "todo",
    },
    {
      id: 2,
      title: "Skriva tester",
      description:
        "Sätt upp tester för att säkerställa att komponenterna fungerar.",
      category: "Testning",
      assignee: "Test-ansvarig",
      priority: "Medel",
      status: "todo",
    },
    {
      id: 3,
      title: "Felsöka testerna",
      description: "Se till att alla testerna passerar utan felmeddelanden.",
      category: "Testning",
      assignee: "Test-ansvarig",
      priority: "Medel",
      status: "todo",
    },
    {
      id: 4,
      title: "Koppla API",
      description: "Felsöka varför endpointen ger 404.",
      category: "Integration",
      assignee: "Backend-utvecklare",
      priority: "Hög",
      status: "doing",
    },
    {
      id: 5,
      title: "Styla knappar",
      description: "Fixa hover-effekter.",
      category: "UI",
      assignee: "Frontend-utvecklare",
      priority: "Medel",
      status: "doing",
    },
    {
      id: 6,
      title: "Bygga menyn",
      description: "Koppla ihop sidorna så länkarna funkar.",
      category: "Layout",
      assignee: "Frontend-utvecklare",
      priority: "Låg",
      status: "doing",
    },
    {
      id: 7,
      title: "Skapa startsidan",
      description: "Sätta upp den grundläggande layouten.",
      category: "Design",
      assignee: "UX-designer",
      priority: "Hög",
      status: "done",
    },
    {
      id: 8,
      title: "Starta projektet",
      description: "Skapa projektmappen och få igång servern lokalt.",
      category: "Setup",
      assignee: "System-admin",
      priority: "Hög",
      status: "done",
    },
    {
      id: 9,
      title: "Git repository",
      description: "Skapa ett Git-repository och lägga till alla i teamet.",
      category: "Git",
      assignee: "System-admin",
      priority: "Låg",
      status: "done",
    },
  ]);

  const handleAddTask = (newTaskData: Omit<Task, "id" | "status">) => {
    const newTask: Task = {
      id: Date.now(),
      ...newTaskData,
      status: "todo",
    };
    setTasks([newTask, ...tasks]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const doingTasks = tasks.filter((task) => task.status === "doing");
  const doneTasks = tasks.filter((task) => task.status === "done");

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
