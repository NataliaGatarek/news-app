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
  const getFav = () => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            const favorites = doc.data().favorites;
            setFavorites(favorites);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }
  };
  const addFavorite = () => {
    var userDocument = db.collection("users").doc(user.uid);
    userDocument
      .update({
        favorites: firebase.firestore.FieldValue.arrayUnion(props.news),
      })
      .then(() => {
        console.log("Document successfully updated!");
        getFav();
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };
  const checkIfFav = () => {
    favorites.map((favorite) => {
      if (favorite.id === props.news.id) {
        console.log("equal");
        setColor("red");
      }
    });
  };
  useEffect(() => {
    getFav();
    checkIfFav();
  }, [favorites]);
  console.log(isLoggedIn);
  return (
    <div>
      <h6> {props.news.sectionName}</h6>
      <p>{color}</p>
      {isLoggedIn ? (
        <button
          onClick={() => addFavorite()}
          style={{ backgroundColor: color }}
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
