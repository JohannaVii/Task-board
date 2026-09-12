type TaskCardProps = {
  id: number;
  title: string;
  description: string;
  assignee: string;
  category: string;
  priority: string;
  onDelete: (id: number) => void;
};

export default function TaskCard({
  id,
  title,
  description,
  assignee,
  category,
  priority,
  onDelete,
}: TaskCardProps) {
  return (
    <article className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm flex flex-col justify-between gap-3 hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <span className="uppercase font-semibold px-2 py-0.5 bg-gray-200 text-gray-700 rounded">
            {category}
          </span>
          <span>|</span>
          <span>{assignee}</span>
          <span>|</span>
          <span className="font-medium text-gray-600">⚡: {priority}</span>
        </div>
        <div className="my-3" />
        <h3 className="font-bold text-gray-800 text-base mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="my-3" />
        <div className="my-3" />
      </div>

      <div className="flex items-center justify-end pt-2 border-t border-gray-200 text-xs gap-1">
        <span className="text-gray-400 uppercase text-[10px]">
          Ta bort task
        </span>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onDelete(id);
          }}
          className="text-gray-500 hover:text-gray-800 no-underline transition-colors font-medium text-[10px]"
        >
          [X]
        </a>
      </div>
    </article>
  );
}
