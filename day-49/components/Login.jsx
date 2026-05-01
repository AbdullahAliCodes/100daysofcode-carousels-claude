import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import AmazonLogo from "../assets/amazon-logo-large.png";

import "./Login.css";

import Modal from "./Modal";
// import Wrapper from "./helpers/Wrapper";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const signIn = (e) => {
    e.preventDefault();
    // using refs with input to interact with the dom is called uncontrolled component
    // why uncontrolled? becuase the input field is handled in the dom itself and the state is not managed by react
    // using value={} and onChange={} with managing the state - would be a controlled components
    const enteredEmail = emailRef.current.value;
    const passwordEmail = passwordRef.current.value;
  };

  return (
    // <Wrapper></Wrapper> -> this is how a wrapper would work, if we were using a custom Wrapper.jsx
    // But we mainly use <React.Fragment> -> <> </>
    <div className="login">
      <Link to="/home">
        <img src={AmazonLogo} alt="Amazon Logo" className="login-logo" />
      </Link>

      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="email" ref={emailRef} />
          <h5>Password</h5>
          <input type="password" ref={passwordRef} />
          <button type="submit" className="login-signInButton" onClick={signIn}>
            Sign in
          </button>
        </form>
        <p>
          By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our totally legit Privacy Notice, our Chocolate Chip
          Cookies and our UnInteresting-Based Ads Notice.
        </p>
        <button className="login-registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;

// Here is how we would access the Portal Modal
// import ReactDom from "react-dom";
// const [isOpen, setIsOpen] = useState(false);
// <button onClick={() => setIsOpen(true)}>Open Modal</button>
// {isOpen &&
//   ReactDom.createPortal(
//     <Modal setIsOpen={setIsOpen} />,
//     document.getElementById("modal-root-div"),
//   )}
