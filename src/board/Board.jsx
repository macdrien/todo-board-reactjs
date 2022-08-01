import useStates from "../useStates";
import "./Board.css";
import State from "./State";

export default function Board({ initialStates }) {
  const [states] = useStates(initialStates);
  return (
    <div class="flexCentered boardComponent">
      <h1>Task board</h1>
      <div className="board">
        {states.map((state) => (
          <State state={state} />
        ))}
      </div>
    </div>
  );
}
