import React, { useContext, useState} from 'react';
import "./Cards.css";
import { LogoContext } from "../context/LogoContext.js";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackButton from "./BackButton.js";
import firebase from "../firebaseConfig.js";
import { useHistory } from "react-router-dom";

function Register() {
  let history = useHistory();
  const db = firebase.firestore();
  const [state, setState] = useState({ email: "", password: "", name: "" });
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(LogoContext);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
   const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(state.email, state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        history.push('/login');
        db.collection("users")
          .doc(user.uid)
          .set({
            name: state.name,
            email: state.email,
          })
          .then(() => {
            db.collection("users")
              .doc(user.uid)
              .get()
              .then((doc) => {
                console.log(doc.data());
              });
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        setUser(null);
        setIsLoggedIn(false);
        // ..
      });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
  register();
  };
    return (
        <div className="LogIn header-cont">
            <h1>Register yourself</h1>
            <Form onSubmit={handleOnSubmit}>
              <label><input type="text" placeholder="name" name="name" value={state.name} onChange={handleChange} /></label> 
              <label><input type="email" placeholder="email" name="email" value={state.email} onChange={handleChange} /></label> 
              <label><input type="password" placeholder="password" name="password" value={state.password} onChange={handleChange} /></label> <br></br>
             <button type="submit">Submit</button>
        </Form><br></br>
        <BackButton/>
        </div>
    )
}
export default Register;