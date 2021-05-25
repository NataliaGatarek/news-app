import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cards.css";
import { NewsContext } from "../context/NewsContext.js";
import { LogoContext } from "../context/LogoContext.js";


function NavBar() {
  const { searchBaner, setSearchBaner } = useContext(NewsContext);
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(LogoContext);
     return (
       <Navbar bg="dark" expand="lg" className="nav-bar">
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <input type="text" placeholder="search news" className="header-cont" onChange={(event) => { setSearchBaner(event.target.value) }} />
          <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mr-auto header-cont">
              <Nav.Link><Link to="/">Home</Link></Nav.Link> 
             <Nav.Link><Link to="/login">Log In</Link></Nav.Link>
             <p>
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)} >leave</button>
            ) : (
              ""
            )}
          </p>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
export default NavBar;