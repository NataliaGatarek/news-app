import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";


function Content(props) {
    console.log(props);
    return (
        <div>
            <h6> {props.news.sectionName}    <button style={{ backgroundColor:'transparent'}}><GrFavorite/></button ></h6>
            <hr/>
            <p>{props.news.pillarName}</p>
            <p>Date: {props.news.webPublicationDate}</p>
            <Link to={`more/${props.news.sectionId}`}><p><strong>...</strong></p></Link>
        </div>
    )
}
export default Content;