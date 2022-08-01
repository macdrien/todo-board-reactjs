import Tag from "./Tag";
import "./Task.css";

export default function Task({
  task,
  sendTaskPreviousState,
  removeTask,
  sendTaskNextState
}) {
  const { name, tags } = task;
  return (
    <div className="task">
      <h3 className="taskName">{name}</h3>
      <div className="flexCentered tags">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <div className="flexCentered actions">
        <div
          className="arrow left"
          onClick={(_event) => sendTaskPreviousState(name)}
        />
        <div className="remove" onClick={(_event) => removeTask(name)} />
        <div
          className="arrow right"
          onClick={(_event) => sendTaskNextState(name)}
        />
      </div>
    </div>
  );
}
