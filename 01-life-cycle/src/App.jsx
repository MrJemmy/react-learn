import "./App.css";
import { useState, useEffect, useRef, useCallback } from "react";
import Cycle from "./components/Cycle";
import {globalContext} from "./context/globalContext";

function App() {
  const [cyclePropValue, setCyclePropValue] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    console.log("(APP - first load) : run only onces");
  }, []);

  useEffect(() => {
    console.log("(APP - every load): run every time when component re-render");
  });

  useEffect(() => {
    console.log("(APP - every setCount): run on every setCount");
  }, [cyclePropValue]);

  useEffect(() => {
    return () => {
      console.log("(APP - on unmount):  run when component unmounts");
    };
  }, []);

  const handelClick = useCallback(() => {
    // using useCallback: this function will render only once, so useState will have intial value only
    // when not to use : The function isn't passed to a memoized child and The component doesn’t re-render frequently or performance isn't an issue.
    console.log("called:", cyclePropValue)
    setCyclePropValue(inputRef.current.value)
  }, [])

  return (
    <>
      <div className="inputs">
        <input type="text" defaultValue={"test"} ref={inputRef} />
        <button type="button" onClick={handelClick}>
          set Prop
        </button>
      </div>

      <globalContext.Provider value={{colorContext: cyclePropValue}}>
        {cyclePropValue ? <Cycle heading={cyclePropValue} /> : ""}
      </globalContext.Provider>
    </>
  );
}

export default App;
