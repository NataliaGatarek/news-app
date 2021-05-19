import React, { useEffect, useState, useContext } from 'react'
import Content from "./Content.js"
import Cards from "./Cards.js"
import Header from "./Header.js"
import "./Cards.css";
import TimeDate from "./TimeDate.js"
import {NewsContext} from "../context/NewsContext.js";

function Home() {
    const { news, setNews, loading, setLoading, searchBaner, setSearchBaner } = useContext(NewsContext);
    console.log(`news`, news);
    //const [news, setNews] = useState([]);
    //const [loading, setLoading] = useState(true);
    //const [searchBaner, setSearchBaner] = useState('');
    const fetchApi = async () => {
        try {
            const response = await fetch("https://content.guardianapis.com/search?api-key=e59054b6-4cd2-4e33-8805-7fc6efe12221");
            const data = await response.json()
            setNews(data.response.results);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
    fetchApi();
  }, []);

    return (
        <React.Fragment>
             <TimeDate/>
            <Header />
             <div className="flex-cards">
                {!loading ? (
                    news.filter((news) =>
                    news.sectionName
                    .toLowerCase()
                    .includes(searchBaner.toLowerCase())
                   )
                    .map((news) => {
                    return (
                       <Cards><Content key={news.id} news={news} /></Cards> 
                    )
                })
            ) : (
                <p>loading..</p>
            )}
            </div> 
            </React.Fragment>
    );
}
export default Home; 