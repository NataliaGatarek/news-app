import React, { createContext, useState } from "react";

const initNewsContext = {
    news:[],
    loading:true,
};
export const NewsContext = createContext(initNewsContext);

export const NewsContextProvider = ({children}) => {
    const [news, setNews] = useState(initNewsContext.news);
    const [loading, setLoading] = useState(initNewsContext.loading);

    return (
        <NewsContext.Provider value={{ news, setNews, loading, setLoading }}>{children}</NewsContext.Provider>
    )
};