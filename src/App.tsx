import Header from "./components/Header";
import Footer from "./components/Footer";
import Column from "./components/Column";
import TaskCard from "./components/TaskCard";
import type { Task } from "./types/Task";

const tasks: Task[] = [
  {
    id: 1,
    title: "Fixa felhantering",
    description: "Visa felmeddelanden om fälten är tomma.",
    category: "UI",
    assignee: "Frontend",
    priority: "Hög",
    status: "todo",
  },
  {
    id: 2,
    title: "Skriva tester",
    description:
      "Sätt upp tester för att säkerställa att komponenterna fungerar.",
    category: "Testning",
    assignee: "Testare",
    priority: "Medel",
    status: "todo",
  },
  {
    id: 3,
    title: "Felsöka testerna",
    description: "Se till att alla testerna passerar utan felmeddelanden.",
    category: "Testning",
    assignee: "Testare",
    priority: "Medel",
    status: "todo",
  },
  {
    id: 4,
    title: "Koppla API",
    description: "Felsöka varför endpointen ger 404.",
    category: "Backend",
    assignee: "Backend",
    priority: "Hög",
    status: "doing",
  },
  {
    id: 5,
    title: "Styla knappar",
    description: "Fixa hover-effekter.",
    category: "UI",
    assignee: "Frontend",
    priority: "Medel",
    status: "doing",
  },
  {
    id: 6,
    title: "Bygga menyn",
    description: "Koppla ihop sidorna så länkarna funkar.",
    category: "Layout",
    assignee: "Frontend",
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
    assignee: "Sysadmin",
    priority: "Hög",
    status: "done",
  },
  {
    id: 9,
    title: "Git repository",
    description: "Skapa ett Git-repository och lägga till alla i teamet.",
    category: "Git",
    assignee: "Sysadmin",
    priority: "Låg",
    status: "done",
  },
];

function App() {
  const todoTasks = tasks.filter((task) => task.status === "todo");
  const doingTasks = tasks.filter((task) => task.status === "doing");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div>
      <div
        style={{ backgroundColor: "#0b192c", padding: "20px", color: "white" }}
      >
        <header>
          <h1 style={{ color: "white" }}>Task board</h1>
          <p>Drift och statushantering</p>
        </header>
      </div>

      <main style={{ display: "flex", justifyContent: "space-between" }}>
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
            />
          ))}
        </Column>
      </main>

      <footer>
        <p>Drivs av React v 1.0.</p>
      </footer>
    </div>
  );
}
export default App;
