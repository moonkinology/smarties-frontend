import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAdmin from "../hooks/AdminContext";
function ProtectedRoute({ children, ...rest }) {
  const { adminStatus } = useAdmin();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        adminStatus === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/unauthorized",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
