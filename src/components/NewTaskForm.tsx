import { useState } from "react";

type NewTaskFormProps = {
  onAddTask: (task: {
    title: string;
    description: string;
    assignee: string;
    category: string;
    priority: string;
    status: string;
  }) => void;
};

const NewTaskForm = ({ onAddTask }: NewTaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("Medel");
  const [status, setStatus] = useState("todo");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!title.trim()) return;
    onAddTask({
      title,
      description,
      assignee,
      category,
      priority,
      status,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#f0f4f8] border border-gray-200 rounded-lg p-3 shadow-sm mb-6 flex flex-col gap-4"
    >
      <h4 className="text-lg font-semibold text-gray-800">Lägg till ny task</h4>
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Titel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 h-8 px-2 p-0.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Beskrivning"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="flex-1 h-8 px-2 p-0.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Ansvarig"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          className="h-8 px-2 p-0.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[140px]"
        />

        <input
          type="text"
          placeholder="Kategori"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-8 px-2 p-0.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[140px]"
        />
        <span className="text-sm font-medium">⚡:</span>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="h-8 px-2 p-0.5 bg-[#f0f4f8] border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Låg</option>
          <option>Medel</option>
          <option>Hög</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="h-8 px-2 p-0.5 bg-[#f0f4f8] border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>

        <button
          type="submit"
          className="bg-slate-800 text-white px-2 h-8 rounded-md font-medium hover:bg-slate-700 transition-colors cursor-pointer ml-auto text-xs"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewTaskForm;
