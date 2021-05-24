import React, { useContext } from 'react';
import "./Cards.css";
import { LogoContext } from "../context/LogoContext.js";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function LogComp(props) {
  const { logging, setLogging } = useContext(LogoContext);
  const Flover = (event) => {
  const { name, value } = event.target;
    setLogging(prevState => ({
      ...prevState,
      [name]: value
    })
    );
  };
  return (
   <div className="LogIn header-cont">
        <h1>Please Log In</h1>
        <Form action="">
        <label>
          <p>Username</p>
            <input type="text" placeholder="username" name="username" value={logging.username} onChange={Flover} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" placeholder="password" name="password" value={logging.password} onChange={Flover} />
        </label>
            <div>
           <button type="submit">Submit</button>
        </div>
      </Form>
      <br></br>
      <h4>You can also register using this link</h4>
      <Link to="/register"><p><strong>...</strong></p></Link>
        </div>
   
       )
}
export default LogComp;