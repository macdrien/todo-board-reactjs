import useStates from "../useStates";
import "./Board.css";
import State from "./State";

export default function Board({ initialStates }) {
  const [
    states,
    sendTaskPreviousState,
    removeTask,
    sendTaskNextState
  ] = useStates(initialStates);
  return (
    <div className="flexCentered boardComponent">
      <h1>Task board</h1>
      <div className="board">
        {states.map((state) => (
          <State
            key={state.name}
            state={state}
            sendTaskPreviousState={sendTaskPreviousState}
            removeTask={removeTask}
            sendTaskNextState={sendTaskNextState}
          />
        ))}
      </div>
    </div>
  );
}
