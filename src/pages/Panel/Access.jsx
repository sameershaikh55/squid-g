import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Login from "./Login";
import Dashboard from "./Dashboard";

const Access = () => {
  const [authState, setAuthState] = useState();

  let auth = localStorage.getItem("auth");

  useEffect(() => {
    if (auth === null) {
      localStorage.setItem("auth", 0);
      setAuthState(!authState);
    }
  }, []);

  useEffect(() => {}, [auth]);

  return (
    <div>
      {(auth == "1" && (
        <>
          <Dashboard authState={authState} setAuthState={setAuthState} />
        </>
      )) || <Login authState={authState} setAuthState={setAuthState} />}
    </div>
  );
};

export default Access;
