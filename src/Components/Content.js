import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Content(props) {
    console.log(props);
    return (
        <div>
            <h6> {props.news.sectionName}</h6>
            <hr/>
            <p>{props.news.pillarName}</p>
            <p>Date: {props.news.webPublicationDate}</p>
            <Link to={`more/${props.news.sectionId}`}><p><strong>...</strong></p></Link>
        </div>
    )
}
export default Content;