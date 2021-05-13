import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

 function Content(props) {
    return (
        <div>
            <h5> {props.news.webTitle}</h5>
             <p>{props.news.sectionName}</p>
            <Link to={`more/${props.news.id}`}><p><strong>...</strong></p></Link>
        </div>
    )
}
export default Content;