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
    <div>
      <header className="p-3  ">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/872/872601.png"
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              />
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
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
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