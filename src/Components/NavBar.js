import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cards.css";
import {NewsContext} from "../context/NewsContext.js";


function NavBar() {
  const { searchBaner, setSearchBaner } = useContext(NewsContext);
     return (
       <Navbar bg="dark" expand="lg">
       <input type="text" className="input-news" placeholder="search news" onChange={event => { setSearchBaner(event.target.value) }} />
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mr-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link> 
             <Nav.Link><Link to="/chat">Chat</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
export default NavBar;