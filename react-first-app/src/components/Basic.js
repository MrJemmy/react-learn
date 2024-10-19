import { useState } from "react";
import "./Basic.css";

function Basic(props) {
  // directly we can not change props.username
  // can we send function as props : yes [it's call "lifting up state"]
  const [username, setUsername] = useState(props.username);

  const img1 =
    "https://dyl347hiwv3ct.cloudfront.net/app/uploads/2023/09/Join-us-at-IMG.webp";
  console.log("recalled");
  return (
    // <React.Fragment> </React.Fragment>
    <>
      <div>
        <div className="img">
          <img src={img1} alt="thisistest" />
        </div>
        <h3>Name : {username}</h3>
        <button
          onClick={() => {
            setUsername("BigB");
          }}
        >
          change name
        </button>
      </div>
    </>
  );
}

export default Basic;
