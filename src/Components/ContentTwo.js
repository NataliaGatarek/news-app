import React from 'react'

 function ContentTwo(props) {
    return (
        <div>
         <h6>{props.news.pillarName}</h6>   
         <p> {props.news.webPublicationDate}</p>   
         <p><strong>{props.news.webTitle}</strong></p>  
        </div>
    )
}
export default ContentTwo;