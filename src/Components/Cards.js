import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { PhotoPlaceholder } from 'react-placeholder-image';

function Cards(props) {
    return (
        <div>
          <Card border="dark" style={{ width: '17rem' }}>
           <Card.Body>
           <Card.Text><div>{props.children}</div>
                    </Card.Text>
        <PhotoPlaceholder className="photo-placeholder" width={180} height={80} grayscale />
         </Card.Body>
                </Card>
        </div>
    )
}
export default Cards;