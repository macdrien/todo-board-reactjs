import useStates from "../useStates";
import "./Board.css";
import State from "./State";

export default function Board({ initialStates }) {
  const [states, removeTask] = useStates(initialStates);
  return (
    <div className="flexCentered boardComponent">
      <h1>Task board</h1>
      <div className="board">
        {states.map((state) => (
          <State state={state} removeTask={removeTask} />
        ))}
      </div>
    </div>
  );
}
