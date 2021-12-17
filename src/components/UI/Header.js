import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory, NavLink } from "react-router-dom";
import axios from "axios";
function Header() {
  const [error, setError] = useState("");
  const [reloaded, setReloaded] = useState(false);
  const { signUp, currentUser, logout } = useAuth();
  const [loading, setLoading] = useState();
  const [adminStatus, setAdminStatus] = useState(false);
  const [success, setSuccess] = useState();
  const fetchAdminStatusCancelTokenSource = axios.CancelToken.source();

  const history = useHistory();
  function handleSignUp() {
    history.push("/signup");
  }
  function handleLogin() {
    history.push("/login");
  }
  async function getAdminStatus() {
    //sign up is async ==> try catch
    try {
      setLoading(true);
      const response = await axios({
        method: "get",
        url: `http://localhost:8080/user/admin/${currentUser.email}`,
        cancelToken: fetchAdminStatusCancelTokenSource.token,
      });
      console.log("starting admin status request for " + currentUser.email);
      setError("");
      if (reloaded === false) {
    
      }
      setAdminStatus(response.data);
      console.log("Admin status: " + response.data);
      setLoading(false);
    } catch (e) {
      // setError("Failed to get admin status.\n" + e.message);
      setLoading(false);
      setTimeout(function () {
        setError("");
      }, 500);
    }
  }
  useEffect(() => {
    getAdminStatus();

    console.log(currentUser?.email);
    return () => {
      fetchAdminStatusCancelTokenSource.cancel();
    };
  }, []);

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
        history.go(0);
        history.push("/");
      }, 500);
    } catch (e) {
      setError("Failed to log out.\n" + e.message);
      setLoading(false);
    }
  }
  return (
    <div className="overlay">
      <header className="p-3">
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
              {adminStatus && (
                <li>
                  <NavLink to="/admin" className="nav-link px-2 text-dark">
                    Adminstration
                  </NavLink>
                </li>
              )}
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
              <div className="alert alert-danger col-12 mx-2 mt-4" role="alert">
                {error}
              </div>
            )}
            {success && (
              <div className="alert alert-success mx-2 col-4" role="alert">
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
