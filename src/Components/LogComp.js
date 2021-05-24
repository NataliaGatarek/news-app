import React, { useContext } from 'react';
import "./Cards.css";
import {LogoContext} from "../context/LogoContext.js";

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
        <div className="LogIn">
            <h1>Please Log In</h1>
      <form action="">
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
      </form>
        </div>
    )
}
export default LogComp;