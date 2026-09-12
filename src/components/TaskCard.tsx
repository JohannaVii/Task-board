type TaskCardProps = {
  id: number;
  title: string;
  description: string;
  assignee: string;
  category: string;
  priority: string;
};

export default function TaskCard({
  title,
  description,
  assignee,
  category,
  priority,
}: TaskCardProps) {
  return (
    <article
      style={{
        backgroundColor: "#f4f6f8",
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "10px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <div className="task-card-top">
        <span className="category" style={{ textTransform: "uppercase" }}>
          {category}
        </span>{" "}
        | <em>{assignee}</em> |⚡: {priority}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
