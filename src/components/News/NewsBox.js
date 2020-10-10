import React from 'react'
import { Col } from 'react-bootstrap'

const NewsBox = () =>{
    return(
        <div>
        <div className="pb-5">
        <div className="news-article">
           <Col-sm>
           <img src="https://i.ibb.co/MnJZGXL/road.jpg"  alt="Problem with loading" style={{ width: '365px' }}></img>
           </Col-sm>
           <Col xs={6}>
           <div className="news-article-content p-4">
               <h2>Title</h2>
               <h3 className="pt-3">Description</h3>
           </div>
           <div className="news-article-details ml-4 mt-5">
              Posted On<p className="px-2">|</p>Comments Count
           </div>
           </Col>
       </div>
       </div>
       </div>
    )
}

export default NewsBox;