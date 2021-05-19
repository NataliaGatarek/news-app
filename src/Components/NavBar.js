import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cards.css";


function NavBar() {
     return (
        <Navbar bg="dark" expand="lg">
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