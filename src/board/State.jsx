import "./State.css";
import Task from "./Task";

export default function State({ state }) {
  const { name, tasks } = state;
  return (
    <div className="state">
      <h2>{name}</h2>
      <div className="tasks">
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </div>
    </div>
  );
}
