import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { LogoContext } from "../context/LogoContext.js";

function PrivateRoute({ children, ...rest }) {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(LogoContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
