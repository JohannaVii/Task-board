import { useNavigate } from "react-router";
import NewTaskForm from "../components/NewTaskForm";

interface NewTaskPageProps {
  onAddTask: (task: {
    title: string;
    description: string;
    assignee: string;
    category: string;
    priority: string;
    status: string;
  }) => void;
}

export const NewTaskPage = ({ onAddTask }: NewTaskPageProps) => {
  const navigate = useNavigate();

  const createNewTask = (task: {
    title: string;
    description: string;
    assignee: string;
    category: string;
    priority: string;
    status: string;
  }) => {
    onAddTask(task);
    navigate("/");
  };

  return (
    <main className="p-6 pt-6 -pb-0">
      <NewTaskForm onAddTask={createNewTask} />
    </main>
  );
};
