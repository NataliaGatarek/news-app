
import './App.css';
import Home from "./Components/Home.js";
import Chat from "./Components/Chat.js";
import NavBar from "./Components/NavBar.js";
import More from "./Components/More.js";
import { NewsContextProvider } from "./context/NewsContext.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <NewsContextProvider>
    <Router>
      <div style={{ backgroundColor: "lightgray", minHeight:"100vh", height: "100%"}}>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home />
            </Route>
            <Route exact path="/chat">
            <Chat />
          </Route>
          <Route exact path="/more/:sectionId" children={<More />} />
        </Switch>
      </div>
      </Router>
      </NewsContextProvider>
  );
}

export default App;
