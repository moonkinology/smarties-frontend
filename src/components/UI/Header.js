import React, { use, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory, NavLink } from "react-router-dom";

function Header() {
  const [error, setError] = useState("");
  const { signUp, currentUser, logout } = useAuth();
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();

  const history = useHistory();
  function handleSignUp() {
    history.push("/signup");
  }
  function handleLogin() {
    history.push("/login");
  }

  async function handleLogOut() {
    //sign up is async ==> try catch
    try {
      setError("");
      setLoading(true);
      await logout();
      setLoading(false);
      setSuccess("You're now logged out");
      setTimeout(function () {
        setSuccess("");
        history.push("/");
      }, 1000);
    } catch (e) {
      setError("Failed to log out.\n" + e.message);
      setLoading(false);
    }
  }
  return (
    <div className="overlay">
      <header className="p-3  ">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-exclude icon-red"
                viewBox="0 0 16 16"
                style={{ color: "black" }}
              >
                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm12 2H5a1 1 0 0 0-1 1v7h7a1 1 0 0 0 1-1V4z" />
              </svg>
            </NavLink>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to="/" exact className="nav-link px-2 text-dark">
                  Smartphones
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link px-2 text-dark">
                  About
                </NavLink>
              </li>
            </ul>

            <div className="text-end">
              {!currentUser && (
                <button
                  type="button"
                  disabled={loading}
                  className="btn btn-outline-dark me-2"
                  onClick={handleLogin}
                >
                  Login
                </button>
              )}
              {currentUser && (
                <button
                  type="button"
                  disabled={loading}
                  className="btn btn-outline-dark me-2"
                  onClick={handleLogOut}
                >
                  log out
                </button>
              )}

              {!currentUser && (
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  disabled={loading}
                  onClick={handleSignUp}
                >
                  Sign-up
                </button>
              )}
            </div>

            {error && (
              <div className="alert alert-danger col-12 mt-4" role="alert">
                {error}
              </div>
            )}
            {success && (
              <div className="alert alert-success" role="alert">
                {success}
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
