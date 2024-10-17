import "./Basic.css";

function Basic() {
  const name = "Jaimin";
  const img1 =
    "https://dyl347hiwv3ct.cloudfront.net/app/uploads/2023/09/Join-us-at-IMG.webp";
  return (
    // <React.Fragment> </React.Fragment>
    <>
      <h1 className="heading">Hello {name}</h1>
      <div className="img-container">
        <div className="img">
          <img src={img1} alt="thisistest" />
        </div>
        <div className="img">
          <img src={img1} alt="thisistest" />
        </div>
        <div className="img">
          <img src={img1} alt="thisistest" />
        </div>
      </div>
    </>
  );
}

export default Basic;
