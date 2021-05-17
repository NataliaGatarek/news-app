import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Content(props) {
    console.log(props);
    return (
        <div>
            <h5> {props.news.sectionName}</h5>
             <p>{props.news.pillarName}</p>
            <Link to={`more/${props.news.sectionId}`}><p><strong>...</strong></p></Link>
        </div>
    )
}
export default Content;