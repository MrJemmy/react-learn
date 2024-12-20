import React, { useEffect, useState, useRef, useContext } from "react";
import style from "../css/custom.module.css";
import Button from "react-bootstrap/Button";
import {AppContext} from "../context/AppContext";

const Cycle = React.memo((props) => {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const prevProps = useRef(props);
  const context = useContext(AppContext); 

  useEffect(() => {
    // same thing we can do in parent

    // Access previous props here
    console.log('Previous props:', prevProps.heading);

    // Update prevProps for the next render
    prevProps.heading = props.heading;
  }, [props]);


  useEffect(() => {
    console.log("(Cycle - first load) : run only onces");
  }, []);

  useEffect(() => {
    console.log("context :",context)
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
    backgroundColor: context.colorContext,
    textAlign: "center",
  };

  const updateCounter = () => {
    // retuning null then it will re render?
    //  if we pass same value as previous then component will not update state also component did not re render.

    const random = String(Math.ceil(Math.random() * 10000)).padEnd(4, "0")
    setCounter( (pre)=> {
      console.log("This is previous value of random :", pre)
      if (pre === random) {
        return pre
      }
      context.setAppValue(random)
      return random
    } )
  }

  return (
    <>
      <h1 style={headingStyle}>props: {props.heading}</h1>

      <div className={style.counter_box}>
        <h2>{count}</h2>
        <Button onClick={() => setCount(count + 1)}>count</Button>
      </div>

      <div className={style.counter_box}>
        <h2>{counter}</h2>
        <Button onClick={updateCounter}>counter</Button>
      </div>
    </>
  );
})
export default Cycle;
