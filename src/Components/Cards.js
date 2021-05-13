import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";

function Cards(props) {
    return (
        <div>
          <Card style={{ width: '18rem' }}>
           <Card.Body>
           <Card.Text><div>{props.children}</div>
                    </Card.Text>
         </Card.Body>
                </Card>
        </div>
    )
}
export default Cards;