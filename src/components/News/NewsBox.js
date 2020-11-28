import React from 'react'
import { Col, Row } from 'react-bootstrap'

const NewsBox = (article) =>{
    return(
      <>
        {article && (
          <Row className="news-article m-5 ">
            <Col-sm>
              <img src={article.articlePicture} alt="Problem with loading" className="news-article-picture"></img>
            </Col-sm>
            <Col>
              <Row className="news-article-content-row">
                <div className="news-article-content p-4">
                  <p className="px-2">{article.articleTitle}</p>
                </div>
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