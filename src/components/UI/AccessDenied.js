import React from "react";
import { Link } from "react-router-dom";
function AccessDenied() {
  return (
    <div
      className="d-flex justify-content-center  position-relative "
      style={{ height: "400px" }}
    >
      <div>
        <p className="position-absolute bottom-50 start-50 translate-middle-x  text-break">
          You're not authorized to access this page. Please log in with an admin
          account.
        </p>
      </div>
    </div>
  );
}

export default AccessDenied;
