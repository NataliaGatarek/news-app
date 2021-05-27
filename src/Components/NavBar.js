import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cards.css";
import { NewsContext } from "../context/NewsContext.js";
import { LogoContext } from "../context/LogoContext.js";
import firebase from "../firebaseConfig.js";
import Button from 'react-bootstrap/Button';


function NavBar() {
  const { searchBaner, setSearchBaner } = useContext(NewsContext);
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(LogoContext);

  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("user logged in", user);
        setUser(user);
      } else {
        console.log("user logged out", user);
        setUser(null);
      setIsLoggedIn(false);
      }
    });
  };
  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  const signout = () => {
    firebase.auth().signOut().then(() => {
      setUser(null);
      setIsLoggedIn(false);
    }).catch((error) => {
      console.log(error)
  });
  }
  const handleClick = (event) => {
    //window.location.reload();
    event.preventDefault();
    signout();
  };
    
  return (
       <Navbar bg="dark" expand="lg" className="nav-bar">
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <input type="text" placeholder="search news" className="header-cont" onChange={(event) => { setSearchBaner(event.target.value) }} />
          <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mr-auto header-cont">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <p>
            {isLoggedIn ? (
              <Button variant="outline-light" onClick={handleClick}>Leave</Button>
               ) : (
              <Nav.Link><Link to="/login">Log In</Link></Nav.Link> 
            )}
             </p>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
export default NavBar;