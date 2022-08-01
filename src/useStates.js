import { useState } from "react";

export default function useStates(initialStates) {
  const [states, setStates] = useState(initialStates);
  return [states];
}
