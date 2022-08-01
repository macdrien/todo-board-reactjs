import { useState } from "react";

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

  return [states, removeTask];
}
