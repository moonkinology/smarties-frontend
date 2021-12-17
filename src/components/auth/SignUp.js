import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
function SignUp() {
  const emailRef = useRef();
  const pwRef = useRef();
  const usernameRef = useRef();
  const pwConfirmationRef = useRef();
  const { signUp, currentUser, setUsername } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();
  const [wantToBeAdmin, setWantToBeAdmin] = useState(false);
  const history = useHistory();

  const secredCodeRef = useRef();
  const [safeValidationStatus, setSafeValidationSatus] = useState(false);
  const secretCTS = axios.CancelToken.source();
  const registerationCTS = axios.CancelToken.source();

  useEffect(() => {
    return () => {
      registerationCTS.cancel();
      secretCTS.cancel();
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      if (pwRef.current.value !== pwConfirmationRef.current.value) {
        return setError("Passwords do not match");
      }

      await handleSignUp();
      await updateProfile();
      await registerUserInBackend(safeValidationStatus);

      setTimeout(function () {
        setSuccess("");
        setLoading(false);
        history.push("/");
      }, 1000);
    } catch (error) {
      console.log("error while handleSubmit : " + error);
    }
  }

  async function registerUserInBackend(adminStatus) {
    const user = {
      firebaseId: "empty",
      firstName: "empty",
      lastName: "empty",
      email: emailRef.current.value,
      phone: null,
      gender: null,
      isAdmin: adminStatus,
    };
    try {
      await axios({
        method: "post",
        url: "http://localhost:8080/user",
        data: user,
        cancelToken: registerationCTS.token,
      });
      console.log(emailRef.current.validateSecretCode + " is now an admin");
    } catch (error) {
      console.log("make admin failed:" + error);
    }
  }

  async function validateSecretCode() {
    try {
      const result = await axios({
        method: "get",
        url: `http://localhost:8080/safe/admin/${secredCodeRef.current.value}`,
        cancelToken: secretCTS.token,
      });
      console.log("secret code is valid " + result.status);
      if (result.status === 200) {
        setSafeValidationSatus(true);
        setSuccess("Validation successful.");

        setTimeout(function () {
          setSuccess("");
          setLoading(false);
        }, 3000);
      }
    } catch (error) {
      setLoading(true);
      setError("Secret is invalid");
      console.log("error while fetching admin status:" + error);
      setTimeout(function () {
        setError("");
        setLoading(false);
      }, 1000);
    }
  }

  async function handleSignUp() {
    try {
      const userCredential = await signUp(
        emailRef.current.value,
        pwRef.current.value
      );
      setLoading(false);
      setSuccess("Account successfully created");
      console.log("signed up: " + userCredential);
    } catch (error) {
      setError("Failed to create an account.\n" + error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile() {
    setLoading(true);
    try {
      await setUsername(usernameRef.current.value);
      setTimeout(function () {
        setSuccess("Username successfully set");
      }, 1000);
      if (safeValidationStatus === true) {
        setTimeout(function () {
          setSuccess("Admin privileges successfully granted");
        }, 1000);
      }
      setTimeout(function () {
        setSuccess("");
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError("Failed to set username.\n" + error.message);
      setLoading(false);
    }
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

        {!safeValidationStatus && (
          <div>
            <div className="d-flex justify-content-end my-3">
              <label className="form-check-label  " htmlFor="defaultCheck1">
                sign-up as admin
              </label>

              <input
                className="form-check-input  ms-1 "
                type="checkbox"
                id="defaultCheck1"
                onChange={(e) => {
                  setWantToBeAdmin((prev) => !prev);
                }}
                checked={wantToBeAdmin === true}
              />
            </div>

            {wantToBeAdmin && (
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="secredCode"
                  placeholder="Password"
                  ref={secredCodeRef}
                />
                <label htmlFor="secredCode">Secret Code</label>
                <button
                  type="button"
                  className="btn btn-success m-3"
                  onClick={validateSecretCode}
                >
                  check & register
                </button>
              </div>
            )}
          </div>
        )}
        <button
          className="w-100 btn btn-lg btn-primary mt-3"
          type="submit"
          disabled={loading}
        >
          finish Sign-Up
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
