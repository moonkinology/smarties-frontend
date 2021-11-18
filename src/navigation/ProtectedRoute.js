import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, ...rest }) {
  let auth = false;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
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
