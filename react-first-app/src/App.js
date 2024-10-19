import "./App.css";
import React from "react";
import Basic from "./components/Basic";
import Heading from "./components/Heading";
import Form from "./components/Form";

function App() {
  return (
    // <React.Fragment> </React.Fragment>
    <>
      <div className="title">
        <Heading />
      </div>

      <div className="img-container">
        <Basic username="jaimin" />
        <Basic username="gunjan" />
        <Basic username="shachi" />
        <Basic username="khushi" />
      </div>

      <div className="form-input">
        <Form />
      </div>
    </>
  );
}

export default App;
