import React, { createContext, useState } from "react";
const initLogoContext = {
  user: null,
  isLoggedIn: false,
  error: "",
};
export const LogoContext = createContext(initLogoContext);

export const LogoContextProvider = ({ children }) => {
  const [user, setUser] = useState(initLogoContext.user);
  const [isLoggedIn, setIsLoggedIn] = useState(initLogoContext.isLoggedIn);
  const [error, setError] = useState(initLogoContext.error);

  return (
    <LogoContext.Provider
      value={{ user, setUser, isLoggedIn, setIsLoggedIn, error, setError }}
    >
      {children}
    </LogoContext.Provider>
  );
};
