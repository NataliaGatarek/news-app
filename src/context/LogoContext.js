import React, { createContext, useState } from "react";
const initLogoContext = {
    logging: { username: "", password: "" }
};
export const LogoContext = createContext(initLogoContext);

export const LogoContextProvider = ({children}) => {
    const [logging, setLogging] = useState(initLogoContext.logging);

    return (
        <LogoContext.Provider value={{ logging, setLogging}}>{children}</LogoContext.Provider>
    )
};