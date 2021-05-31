import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import { LogoContext } from "../context/LogoContext.js";
import firebase from "../firebaseConfig.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BackButton from "./BackButton.js";

function PasswordReset() {
  const [state, setState] = useState({ email: "", password: "" });
  const [passwordResetError, setPasswordResetError] = useState(null);
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(LogoContext);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .sendPasswordResetEmail(state.email)
      .then(function () {
        alert("Please check your email to reset your password");
        setIsLoggedIn(true);
      })
      .catch(function (error) {
        console.log(error);
        setPasswordResetError(error.message);
        setIsLoggedIn(false);
      });
  };
  return (
    <div className="LogIn header-cont">
      <h2>Provide your email address and reset your password</h2>
      {passwordResetError && (
        <p style={{ color: "red" }}>{passwordResetError}</p>
      )}
      <Form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <hr></hr>
        <Button variant="outline-dark" type="submit">
          Reset your password
        </Button>
      </Form>
      <hr></hr>
      <BackButton />
    </div>
  );
}
export default PasswordReset;
