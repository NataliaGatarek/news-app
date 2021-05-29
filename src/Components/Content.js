import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import firebase from "../firebaseConfig.js";
import { LogoContext } from "../context/LogoContext.js";

function Content(props) {
  const db = firebase.firestore();
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(LogoContext);
  const [favorites, setFavorites] = useState([]);
  const favorite = props.favorite;

  return (
    <div>
      <h6> {props.news.sectionName}</h6>
      {isLoggedIn ? (
        <div style={{ textAlign: "right" }}>
          {" "}
          <button
            onClick={() => props.addFavorite(props.news, favorite)}
            style={{ backgroundColor: favorite ? "red" : "transparent" }}
          >
            <GrFavorite />
          </button>{" "}
        </div>
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
