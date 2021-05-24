import React, { createContext, useState } from "react";
const initLogoContext = {
    logging: { username: "", password: "" },
    registering: {username: "", email:"", password:""}
};
export const LogoContext = createContext(initLogoContext);

export const LogoContextProvider = ({children}) => {
    const [logging, setLogging] = useState(initLogoContext.logging);
    const [registering, setRegistering] = useState(initLogoContext.registering);

    return (
        <LogoContext.Provider value={{ logging, setLogging, registering, setRegistering}}>{children}</LogoContext.Provider>
    )
};