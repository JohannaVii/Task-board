import Column from "../components/Column";
import TaskCard from "../components/TaskCard";
import type { Task } from "../types/Task";

interface TaskBoardPageProps {
  tasks: Task[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onDelete: (id: number) => void;
}

export const TaskBoardPage = ({
  tasks,
  searchTerm,
  setSearchTerm,
  onDelete,
}: TaskBoardPageProps) => {
  const filteredTasks = tasks.filter((task) => {
    const term = searchTerm.toLowerCase();
    return (
      task.title?.toLowerCase().includes(term) ||
      task.description?.toLowerCase().includes(term) ||
      task.category?.toLowerCase().includes(term) ||
      task.assignee?.toLowerCase().includes(term) ||
      task.priority?.toLowerCase().includes(term)
    );
  });

  const todoTasks = filteredTasks.filter(
    (task) => task.status?.toLowerCase() === "todo",
  );
  const doingTasks = filteredTasks.filter(
    (task) => task.status?.toLowerCase() === "doing",
  );
  const doneTasks = filteredTasks.filter(
    (task) => task.status?.toLowerCase() === "done",
  );

  return (
    <div className="flex-1 p-6 flex flex-col">
      <div className="mb-5">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Sök här..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0b192c]"
        />
      </div>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 flex-1">
        <Column title="Todo">
          {todoTasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              assignee={task.assignee}
              category={task.category}
              priority={task.priority}
              status={task.status}
              onDelete={onDelete}
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
              assignee={task.assignee}
              category={task.category}
              priority={task.priority}
              status={task.status}
              onDelete={onDelete}
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
              assignee={task.assignee}
              category={task.category}
              priority={task.priority}
              status={task.status}
              onDelete={onDelete}
            />
          ))}
        </Column>
      </main>
    </div>
  );
};
