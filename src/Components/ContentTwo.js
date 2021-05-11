import React from 'react'

 function ContentTwo(props) {
    return (
        <div>
            {props.news.pillarName}
            {props.news.webPublicationDate}
            {props.news.webTitle}
        </div>
    )
}
export default ContentTwo;