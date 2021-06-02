import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import { LogoContext } from "../context/LogoContext.js";
import { NewsContext } from "../context/NewsContext.js";
import firebase from "../firebaseConfig.js";

function Favorites() {
  const db = firebase.firestore();
  const [favs, setFavs] = useState([]);
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(LogoContext);
  const { more, setMore, baner, searchBaner, loading, setLoading } =
    useContext(NewsContext);

  useEffect(() => {
    if (user) {
      displayFavorites();
    }
  }, []);

  function displayFavorites() {
    console.log(user.uid);
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data()["favorites"]);
          const favorites = doc.data()["favorites"];
          setFavs(favorites);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }
  if (favs) {
    return favs
      .filter((favs) =>
        favs.sectionName.toLowerCase().includes(searchBaner.toLowerCase())
      )
      .map((fav) => {
        return (
          <div className="flex-cards" style={{ textAlign: "center" }}>
            <div key={favs.id} favs={favs}>
              <p>{fav.sectionName}</p>
              <p>{fav.type}</p>
              <p>{fav.webPublicationDate}</p>
              <hr></hr>
            </div>
          </div>
        );
      });
  }
}
export default Favorites;
