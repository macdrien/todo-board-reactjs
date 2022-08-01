import Tag from "./Tag";
import "./Task.css";

export default function Task({ task, removeTask }) {
  const { name, tags } = task;
  return (
    <div className="task">
      <h3 className="taskName">{name}</h3>
      <div className="flexCentered tags">
        {tags.map((tag) => (
          <Tag tag={tag} />
        ))}
      </div>
      <div className="flexCentered actions">
        <div className="arrow left" />
        <div className="remove" onClick={(_event) => removeTask(name)} />
        <div className="arrow right" />
      </div>
    </div>
  );
}
