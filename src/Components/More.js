import React, { useEffect, useState } from 'react'
import Cards from "./Cards.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function More(props) {
    const { webTitle } = useParams();
    const [more, setMore] = useState([]);

    useEffect(() => {
        const fetchMore = () => {
            fetch(`http://content.guardianapis.com/tags=${webTitle}?api-key=e59054b6-4cd2-4e33-8805-7fc6efe12221`)
                .then((response) =>
                    response.json()
                )
                .then((data) => {
                    setMore(data.response.results);
                });
        }
        fetchMore();
    }, []);

    return (
        <div>{
             more.map((more) => {
                    return (
                       <div className="flex-cards" key={more.id}><Cards>
                       <p>{webTitle}</p></Cards>
                       </div> 
                      )})
        }
        </div>
)}
export default More;
