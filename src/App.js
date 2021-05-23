
import './App.css';
import Home from "./Components/Home.js";
import LogIn from "./Components/LogIn.js";
import NavBar from "./Components/NavBar.js";
import More from "./Components/More.js";
import { NewsContextProvider } from "./context/NewsContext.js";
import { LogoContextProvider } from "./context/LogoContext.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
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
                <LogIn />
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
