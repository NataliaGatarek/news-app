import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Cards.css";
import { LogoContext } from "../context/LogoContext.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "../firebaseConfig.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function LogComp() {
  let history = useHistory();
  const [state, setState] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(LogoContext);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(state.email, state.password)
      .then((userCredential) => {
        var user = userCredential.user;
        setUser(user);
        setIsLoggedIn(true);
        setError(``);
        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setError(errorMessage);
        setUser(null);
        setIsLoggedIn(false);
        //setError(`Something went wrong, plese try to log in again`);
      });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    login();
  };
  // useEffect(() => {
  //  return firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //    console.log("user is logged");
  //  }
  // });
  // }, []);

  return (
    <div className="LogIn header-cont">
      <h1>Please Log In</h1>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <Form onSubmit={handleOnSubmit}>
        <label>
          <p>Email</p>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <div>
          <Button variant="outline-dark" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <br></br>
      <h4 style={{ margin: "3px" }}>
        You can also register and save favorite articles
      </h4>
      <Link to="/register">
        <Button variant="outline-dark">Register</Button>{" "}
      </Link>
    </div>
  );
}
export default LogComp;
