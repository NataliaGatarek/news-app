import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import { LogoContext } from "../context/LogoContext.js";
import firebase from "../firebaseConfig.js";

function Favorites() {
  const db = firebase.firestore();
  const [favs, setFavs] = useState([]);
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(LogoContext);

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
  /* function displayFavorites() {
    db.collection("users").onSnapshot(handleSnapshot);
  }

  function handleSnapshot(snapshot) {
    const favs = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data().favorutes,
      };
    });
    console.log({ favs });
    setFavs(favs);
  }
  return (
    <div>
      {favs.map((favs) => (
        <Cards key={favs.id} favs={favs} />
      ))}
    </div>
  ); */
  /* useEffect(() => {
    if (user) {
      db.collection("users")
        .get()
        .then((querySnapshot) => {
          let favArray = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " fav=> ", doc.data());
            const favorites = doc.data()[favorites];
            favArray.push(favorites);
            console.log(favorites);
          });
          setFav(favArray);
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }
  }, []); */

  if (favs) {
    return favs.map((fav) => {
      return (
        <div
          key={favs.id}
          favs={favs}
          className="flex-cards"
          style={{ textAlign: "center" }}
        >
          <div>
            <p>{fav.sectionName}</p>
            <p>{fav.type}</p>
            <p>{fav.apiUrl}</p>
            <hr></hr>
          </div>
        </div>
      );
    });
  }
}
export default Favorites;
