import React from 'react'
import Cards from "./Cards.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";


function More(props) {
    let { webTitle } = useParams();
    return (
        <div className="flex-cards"><Cards>
            <p>{webTitle}</p></Cards>
        </div>
    )
}
export default More;