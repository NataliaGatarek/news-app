
import React, { useContext } from "react";
import './App.css';
import Home from "./Components/Home.js";
import LogComp from "./Components/LogComp.js";
import NavBar from "./Components/NavBar.js";
import More from "./Components/More.js";
import Register from "./Components/Register.js"
import { NewsContextProvider } from "./context/NewsContext.js";
import { LogoContextProvider } from "./context/LogoContext.js";
import { LogoContext } from "./context/LogoContext.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


function App() {
  const {isLoggedIn} = useContext(LogoContext);
  return (
    <NewsContextProvider>
       <LogoContextProvider>
    <Router>
      <div style={{ backgroundColor: "lightgray", minHeight:"100vh", height: "100%"}}>
        <NavBar/>
        <Switch>
        <Route exact path="/">
        <Home />
        </Route>
              <Route exact path="/login">
                {isLoggedIn ? <Redirect to="/" /> : <LogComp />}
              </Route>
            <Route exact path="/register">
            <Register/>
            </Route>
        <Route exact path="/more/:sectionId" children={<More />} />
        </Switch>
      </div>
        </Router>
         </LogoContextProvider>
      </NewsContextProvider>
  );
}

export default App;
