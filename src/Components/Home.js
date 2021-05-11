import React, { useEffect, useState } from 'react'
import Content from "./Content.js"
import Cards from "./Cards.js"
import ContentTwo from "./ContentTwo.js"
import Header from "./Header.js"
import "./Cards.css";

function Home() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true); 
    const fetchApi = () => {
        fetch("https://api.jsonbin.io/b/609ac8db1a02f86e1f0998fa", {
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
                    return (
                    <div>
                            <Cards><Content key={news.id} news={news} /></Cards>
                            <Cards><ContentTwo key={news.id} news={news} /></Cards>
                        </div>
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