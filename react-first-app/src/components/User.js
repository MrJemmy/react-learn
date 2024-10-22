import { useState } from "react";

function User() {
  const [user, setUser] = useState(4);

  return (
    <>
      <div>
        <h1>
          Welcome {user === 1 ? "user 1" : user === 2 ? "user 2" : "user 3"}
        </h1>
      </div>
    </>
  );
}

export default User;
