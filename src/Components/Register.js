import React, { useContext } from 'react';
import "./Cards.css";
import { LogoContext } from "../context/LogoContext.js";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
    const { registering, setRegistering } = useContext(LogoContext);
    const Flover = (event) => {
    const { name, value } = event.target;
    setRegistering(prevState => ({
      ...prevState,
      [name]: value
    })
    );
  };
    return (
        <div className="LogIn header-cont">
            <p>registration</p>
            <Form action="">
              <label><input type="text" placeholder="username" name="username" value={registering.username} onChange={Flover} /></label> 
              <label><input type="text" placeholder="email" name="email" value={registering.email} onChange={Flover} /></label> 
              <label><input type="text" placeholder="password" name="password" value={registering.password} onChange={Flover} /></label> 
             <button type="submit">Submit</button>
            </Form>
        </div>
    )
}
export default Register;