import React from 'react'
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cards.css";



function BackButton(props) {
    const history = useHistory();
    const BackHistory = () => {
        history.push("");
    }
        
    return (
        <div className="back-button">
                <Button variant="outline-dark" onClick={BackHistory} >Back</Button>{' '}
        </div>
    )
}
export default BackButton;