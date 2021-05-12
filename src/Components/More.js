import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";


function More(props) {
    let { id } = useParams();
    return (
        <div>
            <p>{id}</p>
        </div>
    )
}
export default More;