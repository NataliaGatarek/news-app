import React, { createContext, useState } from "react";
const initLogoContext = {
    user: null,
    isLoggedIn: false,
};
export const LogoContext = createContext(initLogoContext);

export const LogoContextProvider = ({children}) => {
    const [user, setUser] = useState(initLogoContext.user);
    const [isLoggedIn, setIsLoggedIn] = useState(initLogoContext.isLoggedIn);

    return (
        <LogoContext.Provider value={{ user,setUser,isLoggedIn,setIsLoggedIn,}}>{children}</LogoContext.Provider>
    )
};