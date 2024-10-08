import { createContext, useState } from "react";

export let counterContext = createContext();

export function CounterContextProvider({ children }) {
  let [Counter, setCounter] = useState(0);

  return (
    <>
      <CounterContextProvider value={Counter}>
        {" "}
        {children}{" "}
      </CounterContextProvider>{" "}
    </>
  );
}
