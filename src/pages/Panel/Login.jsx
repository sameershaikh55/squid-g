import React, { useEffect, useState } from "react";

// IMPORTING FIREBASE
import { db } from "../../firebase/firebase";

// IMPORTING COMPONENTS
import Footer from "../../components/Footer";

// IMPORTING LOGO
import logo from "../../assets/logo.svg";

const Login = ({ authState, setAuthState }) => {
  const [posts, setPosts] = useState([]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  // TO GET USERNAME AND PASSWORD
  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db.collection("users").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({
          ...doc.data(), //spread operator
          key: doc.id, // `id` given to us by Firebase
        });
      });
      setPosts(getPostsFromFirebase);
    });

    // return cleanup function
    return () => subscriber();
  }, [posts]); // empty dependencies array => useEffect only called once

  const emailHandle = (e) => {
    setEmail(e.target.value);

    let accessEmail = posts.filter((prev) => prev.username === e.target.value);

    if (accessEmail.length) {
      setEmailErr("");
    } else {
      setEmailErr("Invalid*");
    }
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value);

    let accessPass = posts.filter((prev) => prev.password === e.target.value);

    if (accessPass.length) {
      setPasswordErr("");
    } else {
      setPasswordErr("Invalid*");
    }
  };

  const submitHandle = (e) => {
    e.preventDefault();

    if (emailErr.length === 0 && passwordErr.length === 0) {
      localStorage.setItem("auth", 1);
      setAuthState(!authState);
    }
  };

  return (
    <>
      <div className="login_container">
        <div className="container-fluid">
          <div className="form_container">
            <div className="row">
              <div className="col-8 mx-auto">
                <img
                  className="w-100"
                  src={logo}
                  alt="Logo Squid Game Collection"
                />
              </div>
            </div>
            <p className="text-white mt-3 mb-4">
              Access to the boss's operating room
            </p>
            <form onSubmit={submitHandle} className="d-flex flex-column w-100">
              <div className="position-relative w-100">
                <input
                  placeholder="login"
                  type="text"
                  required
                  value={email}
                  onChange={emailHandle}
                  className="w-100"
                />
                <br />
                {(emailErr.length && (
                  <small className="f12 fw-bold position-absolute redColor">
                    {emailErr}
                  </small>
                )) ||
                  ""}
              </div>
              <div className="position-relative w-100 mt-2">
                <input
                  placeholder="Password"
                  className="mt-3 w-100"
                  type="password"
                  required
                  value={password}
                  onChange={passwordHandle}
                />
                <br />
                {(passwordErr.length && (
                  <small className="f12 fw-bold position-absolute redColor">
                    {passwordErr}
                  </small>
                )) ||
                  ""}
              </div>
              <br />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
