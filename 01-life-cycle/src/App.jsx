import "./App.css";
import { useState, useEffect } from "react";
import Cycle from "./components/Cycle";

function App() {
  const [cycleProp, setCycleProp] = useState(null);
  const [cyclePropValue, setCyclePropValue] = useState(null);

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

  return (
    <>
      <div className="inputs">
        <input type="text" onChange={(e) => setCycleProp(e.target.value)} />
        <button type="button" onClick={() => setCyclePropValue(cycleProp)}>
          set Prop
        </button>
      </div>

      {cyclePropValue ? <Cycle heading={cyclePropValue} /> : ""}
    </>
  );
}

export default App;
