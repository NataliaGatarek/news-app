import React, { useEffect, useContext } from "react";
import Cards from "./Cards.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { NewsContext } from "../context/NewsContext.js";
import BackButton from "./BackButton.js";
import "./Cards.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function More(props) {
  const { more, setMore, baner, searchBaner, loading, setLoading } =
    useContext(NewsContext);
  const { sectionId } = useParams();
  // const [more, setMore] = useState([]);

  const fetchMore = async () => {
    try {
      const response = await fetch(
        `https://content.guardianapis.com/tags?section=${sectionId}&api-key=${process.env.REACT_APP_API_KEY_GUARDIAN}`
      );
      const data = await response.json();
      setMore(data.response.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMore();
  }, []);

  return (
    <React.Fragment>
      <BackButton />
      <div className="flex-cards">
        {!loading ? (
          more
            .filter((more) =>
              more.webTitle.toLowerCase().includes(searchBaner.toLowerCase())
            )
            .map((more) => {
              return (
                <Cards>
                  <div key={more.id}>
                    <h5>{sectionId}</h5>
                    <hr />
                    <p>{more.webTitle}</p>
                    <p>
                      <a href={more.webUrl} target="_blank">
                        Click here to read more
                      </a>
                    </p>
                  </div>
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
export default More;
