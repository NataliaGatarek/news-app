import React from 'react'

 function Content(props) {
    return (
        <div>
         {props.news.sectionName}
         {props.news.webTitle}
        </div>
    )
}
export default Content;