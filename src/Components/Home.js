import React, { useEffect, useState } from 'react'
import Content from "./Content.js"
import Cards from "./Cards.js"
import Header from "./Header.js"
import "./Cards.css";

function Home() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true); 
    const fetchApi = () => {
        fetch("https://api.jsonbin.io/b/609aa766e0aabd6e191bce6c", {
            headers: {
            "secret-key": "$2b$10$mLJ/ZZQcwSmRR0.XSy4vTuc2xZY/pKBtWJyaneLlLfJTv8MIVx0xa"
            }
        }
        )
            .then((response) => 
                response.json()
                )
    
            .then((data) => {
                setNews(data.response.results);
                setLoading(false);
            });
    }

    useEffect(() => {
    fetchApi();
  });

    return (
        <React.Fragment>
        <Header/>
        <div className="flex-cards">
            {!loading ? (
                news.map((news) => {
                    return <Cards><Content key={news.id} news={news} /></Cards>
                })
            ) : (
                <p>loading..</p>
            )}
            </div>
            </React.Fragment>
    );
}
export default Home; 