import { useEffect, useState } from "react";
import style from "../css/custom.module.css";

function Cycle(props) {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("(Cycle - first load) : run only onces");
  }, []);

  useEffect(() => {
    console.log(
      "(Cycle - every load): run every time when component re-render"
    );
  });

  useEffect(() => {
    console.log("(Cycle - every setCount): run on every setCount");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("(Cycle - on unmount):  run when component unmounts");
    };
  }, []);

  useEffect(() => {
    console.log("(Cycle - every props update): run on every setCount");
  }, [props.heading]);

  const headingStyle = {
    backgroundColor: "red",
    textAlign: "center",
  };

  return (
    <>
      <h1 style={headingStyle}>props: {props.heading}</h1>

      <div className={style.counter_box}>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>count</button>
      </div>

      <div className={style.counter_box}>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>counter</button>
      </div>
    </>
  );
}

export default Cycle;
