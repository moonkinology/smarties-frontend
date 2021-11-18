import React from "react";
import { Link } from "react-router-dom";
function Nothing() {
  return (
    <div
      className="d-flex justify-content-center  position-relative "
      style={{ height: "400px" }}
    >
      <div>
        <p className="position-absolute bottom-50 start-50 translate-middle-x ">
          Nothing to see here...
        </p>
        <Link to="/">
          <p className="   position-absolute top-50 start-50 translate-middle  ">
            Back to Home
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Nothing;
