import "./App.css";
import React from "react";
import Basic from "./components/Basic";
import Heading from "./components/Heading";
import Form from "./components/Form";
import User from "./components/User";
function popup() {
  alert("form is submited")
}
function App() {
  return (
    // <React.Fragment> </React.Fragment>
    <>
      <div className="title">
        <User />
        <Heading />
      </div>

      <div className="img-container">
        <Basic username="jaimin" />
        <Basic username="gunjan" />
        <Basic username="shachi" />
        <Basic username={"khushi"} />
      </div>

      <div className="form-input">
        <Form popup={popup} />
      </div>
    </>
  );
}

export default App;
