import { useState } from "react";
import "./Form.css";

function Form() {
  const [username, setUsername] = useState();
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState(false);
  const [car, setCar] = useState();
  const [tnc, setTnc] = useState();

  function getFormSubmit(e) {
    e.preventDefault();
    console.log(username);
    console.log(car);
    console.log(tnc);
  }

  function usernameValidation(e) {
    let item = e.target.value;
    console.log(item);
    if (item.lenght < 4) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
      setUsername(item);
    }
  }

  function passwordValidation(e) {
    let item = e.target.value;
    console.log(item);
    if (item.lenght < 4) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setPassword(item);
    }
  }

  return (
    <>
      <form onSubmit={getFormSubmit}>
        <input
          type="text"
          onChange={usernameValidation}
          placeholder="Please Enter Username"
        />
        {usernameError ? <span>username is not valid</span> : null}
        <br />
        <br />
        <input
          type="password"
          onChange={passwordValidation}
          placeholder="Please Enter Password"
        />
        {passwordError ? <span>Password is not valid</span> : null}
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
