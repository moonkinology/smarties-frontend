import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const { login, currentUser } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const [success, setSuccess] = useState();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    //sign up is async ==> try catch
    try {
      setError("");
      setLoading(true);
      console.log("signing in with " + email);
      await login(email, pw);
      //when we have a user, by default is true
      setLoading(false);
      setSuccess("You're now logged in as " + currentUser?.email);
      setTimeout(function () {
        setSuccess("");
        history.push("/");
      }, 500);
    } catch (e) {
      //setError("Failed to sign in.\n" + e.message);
      setTimeout(function () {
        setSuccess("");
        history.push("/");
      }, 500);
      console.log(e);
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
        <h1 className="h3 mb-3 fw-normal mb-5">Log in</h1>
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
            id="loginEmail"
            placeholder="Email address"
            required
            onInput={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="loginEmail">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            placeholder="Password"
            required
            onInput={(e) => setPw(e.target.value)}
          />
          <label htmlFor="loginPassword">Password</label>
        </div>

        <button
          className="w-100 btn btn-lg btn-primary"
          disabled={loading}
          type="submit"
        >
          Log in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; Smarties</p>
      </form>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default Login;
