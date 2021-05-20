import React, { useEffect, useState, useContext } from 'react';
import Cards from "./Cards.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NewsContext} from "../context/NewsContext.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";


function More(props) {
    const { more, setMore, baner, searchBaner, loading, setLoading} = useContext(NewsContext);
    const { sectionId } = useParams();
   // const [more, setMore] = useState([]);
    

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
      <div>
         {!loading ? (
                  more.filter((more) =>
                   more.webTitle
                  .toLowerCase()
                  .includes(searchBaner.toLowerCase())
          )
          .map((more) => {
               return (
                        <div key={more.id} className="flex-cards"><Cards>
                            <h5>{sectionId}</h5> <hr/><p>{more.webTitle}</p><p><a href={more.webUrl} target="_blank">Click here to read more</a></p></Cards>
                       </div>
                      )})
            ) : (
                <p>loading..</p>
            )}
        </div>
)}
export default More;
