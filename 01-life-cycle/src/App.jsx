import "./App.css";
import { useState, useEffect, useRef, useCallback } from "react";
import Cycle from "./components/Cycle";

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

  // const handelClick= useCallback(()=>{
  //   console.log("called:", cyclePropValue)
  //   setCyclePropValue(inputRef.current.value)
  // }, [])
  const handelClick= ()=>{
    console.log("called:", cyclePropValue)
    setCyclePropValue(inputRef.current.value)
  }

  return (
    <>
      <div className="inputs">
        <input type="text" ref={inputRef} />
        <button type="button" onClick={handelClick}>
          set Prop
        </button>
      </div>

      {cyclePropValue ? <Cycle heading={cyclePropValue} /> : ""}
    </>
  );
}

export default App;
