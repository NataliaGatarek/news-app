import React, { useEffect, useState } from 'react'
import Content from "./Content.js"
import Cards from "./Cards.js"
import Header from "./Header.js"
import "./Cards.css";
import TimeDate from "./TimeDate.js"

function Home() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true); 
    const fetchApi = () => {
        fetch("https://content.guardianapis.com/search?api-key=e59054b6-4cd2-4e33-8805-7fc6efe12221")
            .then((response) => 
                response.json()
                )
    
            .then((data) => {
                setNews(data.response.results);
                setLoading(false);
            })
             .catch ((error) => {
        console.log(error);
    });
};


    useEffect(() => {
    fetchApi();
  }, []);

    return (
        <React.Fragment>
             <TimeDate/>
            <Header />
        <div className="flex-cards">
            {!loading ? (
                news.map((news) => {
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