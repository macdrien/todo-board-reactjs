import "./State.css";
import Task from "./Task";

export default function State({
  state,
  sendTaskPreviousState,
  removeTask,
  sendTaskNextState
}) {
  const { name, tasks } = state;
  return (
    <div className="state">
      <h2>{name}</h2>
      <div className="tasks">
        {tasks.map((task) => (
          <Task
            key={task.name}
            task={task}
            sendTaskPreviousState={sendTaskPreviousState}
            removeTask={removeTask}
            sendTaskNextState={sendTaskNextState}
          />
        ))}
      </div>
    </div>
  );
}
