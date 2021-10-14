import React, { useRef } from "react";

function SignUp() {
  const emailRef = useRef();
  const pwRef = useRef();
  const pwConfirmationRef = useRef();
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
        <h1 className="h3 mb-3 fw-normal mb-5">Sign up</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="signUpEmail"
            placeholder="Email"
            required
            ref={emailRef}
          />
          <label for="signUpEmail">Email Address</label>
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
          <label for="signUpPassword">Password</label>
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
          <label for="passwordConfirmation">Password Confirmation</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; Smarties</p>
      </form>
    </div>
  );
}

export default SignUp;
