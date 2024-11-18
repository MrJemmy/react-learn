import { useState } from "react";
import "./Form.css";

function Form(props) {
  const [username, setUsername] = useState();
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState(false);
  const [car, setCar] = useState();
  const [tnc, setTnc] = useState();

  function getFormSubmit(e) {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(car);
    console.log(tnc);
    if (!usernameError && !passwordError) {
      props.popup();
    }
  }

  function usernameValidation(e) {
    let item = e.target.value;
    if (item.length < 4) {
      console.log("invalid:", item)
      setUsernameError(true);
    } else {
      setUsernameError(false);
      setUsername(item);
    }
  }

  function passwordValidation(e) {
    let item = e.target.value;
    console.log(item);
    if (item.length < 4) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setPassword(item);
    }
  }

  return (
    <>
      <form onSubmit={getFormSubmit}>
        <input type="text" onChange={usernameValidation} placeholder="Please Enter Username" />
        <span>{usernameError ? "username is not valid" : ""}</span>
        <br /><br />
        <input type="password" onChange={passwordValidation} placeholder="Please Enter Password" />
        {passwordError ? <span>Password is not valid</span> : ""}
        <br /><br />
        <select onChange={(e) => setCar(e.target.value)}>
          <option value="0">|--- select ---|</option>
          <option value="1">Ridz</option>
          <option value="2">S-cross</option>
          <option value="3">Maruti 800</option>
        </select>
        <br /><br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />{" "}
        <label>Accept Terms & Conditions</label>
        <br /><br />
        <input type="submit" value="submit" />
        {/* <input type="submit" value="submit" onClick={()=>props.data()}  onClick={props.data} /> */}
        {/* this both way we can call functions */}
      </form>
    </>
  );
}

export default Form;
