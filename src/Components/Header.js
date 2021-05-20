import React from 'react'
import "./Cards.css";
import TimeDate from "./TimeDate.js"

function Header() {

    return (
        <div className="header-cont">
             <TimeDate/>
            <h1 className="news">News</h1>
            <h4>online</h4>
        </div>
    )
}
export default Header;