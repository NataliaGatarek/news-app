import React, { useEffect, useState, useContext } from "react";
import Content from "./Content.js";
import Cards from "./Cards.js";
import Header from "./Header.js";
import firebase from "../firebaseConfig.js";
import "./Cards.css";
import { NewsContext } from "../context/NewsContext.js";
import { LogoContext } from "../context/LogoContext.js";

function Home() {
  const db = firebase.firestore();
  const { news, setNews, loading, setLoading, searchBaner, setSearchBaner } =
    useContext(NewsContext);
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(LogoContext);
  console.log(`news`, news);
  const [favorites, setFavorites] = useState([]);
  //const [news, setNews] = useState([]);
  //const [loading, setLoading] = useState(true);
  //const [searchBaner, setSearchBaner] = useState('');
  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://content.guardianapis.com/search?api-key=e59054b6-4cd2-4e33-8805-7fc6efe12221"
      );
      const data = await response.json();
      setNews(data.response.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
    getFav();
  }, []);
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
  const checkIfFav = (news) => {
    const found = favorites.find((favorite) => favorite.id === news.id);
    console.log(found);
    if (found === undefined) {
      return false;
    } else {
      return true;
    }
  };
  const addFavorite = (news) => {
    var userDocument = db.collection("users").doc(user.uid);
    userDocument
      .update({
        favorites: firebase.firestore.FieldValue.arrayUnion(news),
      })
      .then(() => {
        console.log("Document successfully updated!");
        getFav();
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };
  return (
    <React.Fragment>
      <Header />
      <div className="flex-cards">
        {!loading ? (
          news
            .filter((news) =>
              news.sectionName.toLowerCase().includes(searchBaner.toLowerCase())
            )
            .map((news) => {
              return (
                <Cards>
                  <Content
                    addFavorite={addFavorite}
                    favorite={checkIfFav(news)}
                    key={news.id}
                    news={news}
                  />
                </Cards>
              );
            })
        ) : (
          <p>loading..</p>
        )}
      </div>
    </React.Fragment>
  );
}
export default Home;
