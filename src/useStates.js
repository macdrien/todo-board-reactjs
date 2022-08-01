import { useState } from "react";

const findStateHavingTheTask = (taskName, states) => {
  return states.findIndex(
    (state) => state.tasks.findIndex((task) => task.name === taskName) !== -1
  );
};

const findTaskIndex = (taskName, states) => {
  let taskIndex = -1;

  states.forEach((state) => {
    const tmpIndex = state.tasks.findIndex((task) => task.name === taskName);
    if (tmpIndex !== -1) {
      taskIndex = tmpIndex;
      return;
    }
  });

  return taskIndex;
};

export default function useStates(initialStates) {
  const [states, setStates] = useState(initialStates);

  const removeTask = (taskName) => {
    const newStates = Array.from(states);
    newStates.forEach((state) => {
      const taskIndex = state.tasks.findIndex((task) => task.name === taskName);
      if (taskIndex !== -1) {
        state.tasks.splice(taskIndex, 1);
        return;
      }
    });
    setStates(newStates);
  };

  const sendTaskPreviousState = (taskName) => {
    const newStates = Array.from(states);
    const currentStateIndex = findStateHavingTheTask(taskName, newStates);

    if (currentStateIndex === 0) {
      return;
    }

    const currentTaskIndex = findTaskIndex(taskName, newStates);

    if (currentTaskIndex === -1) {
      return;
    }

    newStates[currentStateIndex - 1].tasks.push(
      newStates[currentStateIndex].tasks[currentTaskIndex]
    );
    newStates[currentStateIndex].tasks.splice(currentTaskIndex, 1);

    setStates(newStates);
  };

  const sendTaskNextState = (taskName) => {
    const newStates = Array.from(states);
    const currentStateIndex = findStateHavingTheTask(taskName, newStates);

    if (currentStateIndex === newStates.length - 1) {
      return;
    }

    const currentTaskIndex = findTaskIndex(taskName, newStates);

    if (currentTaskIndex === -1) {
      return;
    }

    newStates[currentStateIndex + 1].tasks.push(
      newStates[currentStateIndex].tasks[currentTaskIndex]
    );
    newStates[currentStateIndex].tasks.splice(currentTaskIndex, 1);

    setStates(newStates);
  };

  return [states, sendTaskPreviousState, removeTask, sendTaskNextState];
}
