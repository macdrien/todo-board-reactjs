import React from "react";
import Board from "./Board";
import "./styles.css";
import tasks from "./tasks";

export default function App() {
  return (
    <div className="App">
      <Board tasks={tasks} />
    </div>
  );
}
