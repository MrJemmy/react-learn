import { useState } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState();
  const [car, setCar] = useState();
  const [tnc, setTnc] = useState();

  function getFormSubmit(e) {
    console.log(name);
    console.log(car);
    console.log(tnc);
    e.preventDefault();
  }
  console.log("render");
  return (
    <>
      <form onSubmit={getFormSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <br />
        <select onChange={(e) => setCar(e.target.value)}>
          <option value="0">|--- select ---|</option>
          <option value="1">Ridz</option>
          <option value="2">S-cross</option>
          <option value="3">Maruti 800</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={(e) => setTnc(e.target.checked)}
        />{" "}
        <label>Accept Terms & Conditions</label>
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default Form;
