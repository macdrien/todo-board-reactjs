import "./Task.css";

export default function Task({ task }) {
  const { name, tags } = task;
  return (
    <div className="task">
      <h3 className="taskName">{name}</h3>
      <div className="flexCentered tags">
        {tags.map((tag) => (
          <div
            style={{
              padding: "5px",
              backgroundColor: "#dddddd",
              boxShadow: "1px 1px #999999",
              borderRadius: "5px"
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
