import React from 'react'
import { Col, Row } from 'react-bootstrap'

const NewsBox = (article) =>{
    return(
      <>
        {article && (
          <Row className="news-article">
            <Col-sm>
              <img src={article.articlePicture} alt="Problem with loading" className="news-article-picture"></img>
            </Col-sm>
            <Col>
              <Row className="news-article-content">
                  <p className="p-4 ml-2">{article.articleTitle}</p>
              </Row>
              <Row md={{ span: 6, offset: 3 }} className="news-article-details-row p-4">
                <div className="news-article-details">
                  <p className="px-2">{article.dateTimeCreated}</p> -
           </div>
                <div className="news-article-details">
                  <p className="px-2">{article.authorName}</p>
                </div>
              </Row>
            </Col>
          </Row>
        )}
      </>
    )
}

export default NewsBox;