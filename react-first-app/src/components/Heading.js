import { useState } from "react";
import "./Heading.css";

function Heading(props) {
  const [heading, setHeading] = useState("User Details");
  const [printHeading, setPrintHeading] = useState(null);
  const [print, setPrint] = useState(false);
  const [toggel, setToggel] = useState(true);

  function changeHeader(val) {
    setHeading(val.target.value);
  }

  return (
    // <React.Fragment> </React.Fragment>
    <>
      {toggel ? <h1 className="heading">{heading}</h1> : null}

      <input type="text" onChange={changeHeader} />
      <button
        onClick={() => {
          setPrint(true);
          setPrintHeading(heading);
        }}
      >
        Set Name
      </button>

      <button onClick={() => setToggel(!toggel)}>toggel</button>

      <div className="info">
        {print ? <h1>{printHeading}</h1> : <h1>Click Set Name</h1>}
      </div>
    </>
  );
}

export default Heading;
