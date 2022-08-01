import Tag from "./Tag";
import "./Task.css";

export default function Task({ task }) {
  const { name, tags } = task;
  return (
    <div className="task">
      <h3 className="taskName">{name}</h3>
      <div className="flexCentered tags">
        {tags.map((tag) => (
          <Tag tag={tag} />
        ))}
      </div>
    </div>
  );
}
