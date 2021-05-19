import React, { useEffect, useState, useContext } from 'react'
import Cards from "./Cards.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function More(props) {
    const { sectionId } = useParams();
    const [more, setMore] = useState([]);
    

const fetchMore = async () => {
        try {
            const response = await fetch(`http://content.guardianapis.com/tags?section=${sectionId}&api-key=e59054b6-4cd2-4e33-8805-7fc6efe12221`);
            const data = await response.json()
            setMore(data.response.results);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
    fetchMore();
  }, []);

    return (
        <div>{
             more.map((more) => {
                    return (
                       <div className="flex-cards" key={more.id}><Cards>
                            <p>{sectionId}</p> <hr/><p>{more.webTitle}</p><p><a href={more.webUrl} target="_blank">Click here to read more</a></p></Cards>
                       </div> 
                      )})
        }
        </div>
)}
export default More;
