import React from "react";
import Board from "./Board";
import "./styles.css";
import states from "./tasks";

export default function App() {
  return (
    <div className="App">
      <Board states={states} />
    </div>
  );
}
