import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

 function Content(props) {
    return (
        <div>
         {props.news.sectionName}
         {props.news.webTitle}
        </div>
    )
}
export default Content;