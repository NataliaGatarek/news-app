import React, { createContext, useState } from "react";

const initNewsContext = {
    news:[],
    loading: true,
    searchBaner: "",
    more:[],
};
export const NewsContext = createContext(initNewsContext);

export const NewsContextProvider = ({children}) => {
    const [news, setNews] = useState(initNewsContext.news);
    const [loading, setLoading] = useState(initNewsContext.loading);
    const [searchBaner, setSearchBaner] = useState(initNewsContext.searchBaner);
    const [more, setMore] = useState(initNewsContext.more);

    return (
        <NewsContext.Provider value={{ news, setNews, loading, setLoading, searchBaner, setSearchBaner, more, setMore }}>{children}</NewsContext.Provider>
    )
};