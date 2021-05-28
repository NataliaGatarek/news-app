import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import firebase from "../firebaseConfig.js";
import { LogoContext } from "../context/LogoContext.js";

function Content(props) {
  console.log(props);
  const db = firebase.firestore();
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(LogoContext);
  const [favorites, setFavorites] = useState([]);
  const [color, setColor] = useState("transparent");
  const favorite = props.favorite;

  console.log(isLoggedIn);
  return (
    <div>
      <h6> {props.news.sectionName}</h6>
      <p>{color}</p>
      {isLoggedIn ? (
        <button
          onClick={() => props.addFavorite(props.news)}
          style={{ backgroundColor: favorite ? "red" : "transparent" }}
        >
          <GrFavorite />
        </button>
      ) : (
        ""
      )}
      <hr />
      <p>{props.news.pillarName}</p>
      <p>Date: {props.news.webPublicationDate}</p>
      <Link to={`more/${props.news.sectionId}`}>
        <p>
          <strong>...</strong>
        </p>
      </Link>
    </div>
  );
}
export default Content;
