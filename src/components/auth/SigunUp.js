import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

function SignUp() {
  const emailRef = useRef();
  const pwRef = useRef();
  const usernameRef = useRef();
  const pwConfirmationRef = useRef();
  const { signUp, currentUser } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (pwRef.current.value !== pwConfirmationRef.current.value) {
      return setError("Passwords do not match");
    }

    signUp(emailRef.current.value, pwRef.current.value)
      .then((userCredential) => {
        setLoading(false);
        setSuccess("Account successfully created for " + userCredential.email);
        console.log(userCredential);
        setTimeout(function () {
          setSuccess("");
          history.push("/");
        }, 1000);
      })
      .catch((error) => {
        setError("Failed to create an account.\n" + error.message);
      });
    setLoading(false);
  }

  return (
    <div className="text-center form-signin my-5">
      <form onSubmit={handleSubmit}>
        <img
          className="mb-4"
          src="https://www.svgrepo.com/show/161419/wink.svg"
          alt=""
          width="55"
          height="55"
        />
        <h1 className="h3 mb-3 fw-normal mb-5">Sign up</h1>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {success && (
          <div className="alert alert-success" role="alert">
            {success}
          </div>
        )}
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="signUpEmail"
            placeholder="Email"
            required
            ref={emailRef}
          />
          <label htmlFor="signUpEmail">E-Mail Address</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="username"
            ref={usernameRef}
            placeholder="username"
            required
          />
          <label htmlFor="username">Username</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="signUpPassword"
            ref={pwRef}
            placeholder="password"
            required
          />
          <label htmlFor="signUpPassword">Password</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="passwordConfirmation"
            placeholder="Password Confirmation"
            ref={pwConfirmationRef}
            required
          />
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
        </div>

        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          disabled={loading}
        >
          Sign up
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; Smarties</p>
      </form>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default SignUp;
