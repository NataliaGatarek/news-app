
import './App.css';
import Home from "./Components/Home.js";
import Chat from "./Components/Chat.js";
import NavBar from "./Components/NavBar.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div >
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home />
            </Route>
            <Route exact path="/chat">
            <Chat />
            </Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
