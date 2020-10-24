import React from 'react'
import { Col, Row } from 'react-bootstrap'

const NewsBox = (article) =>{
    return(
        <>
        {article && (
        <Row className="news-article mb-5">
           <Col-sm>
           <img src={article.articlePicture}  alt="Problem with loading" className="news-article-picture"></img>
           </Col-sm>
           <Col xs={6}>
            <Row>
           <div className="news-article-content p-4">
               <p>{article.articleTitle}</p>
           </div>
           </Row>
           <Row md={{ span: 6, offset: 3 }} className="news-article-details-row p-4">
           <div className="news-article-details">
              {article.dateTimeCreated}<p className="px-2"></p>
           </div>
           </Row>
           </Col>
       </Row>
        )}
       </>
    )
}

export default NewsBox;