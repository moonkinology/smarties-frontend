import React from "react";

function Login() {
  return (
    <div className="text-center form-signin my-5">
      <form>
        <img
          className="mb-4"
          src="https://www.svgrepo.com/show/161419/wink.svg"
          alt=""
          width="55"
          height="55"
        />
        <h1 className="h3 mb-3 fw-normal mb-5">Log in</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" />
          <label for="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Log in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; Smarties</p>
      </form>
    </div>
  );
}

export default Login;
