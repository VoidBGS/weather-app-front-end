import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'


const NewsArticleBox = (article) =>{
    console.log(article)
    return(
    <>
        {article &&(<Col className="news-box mr-4">
        <Row className="justify-content-center"><img src={article.articlePicture} className="news-box-picture" alt="Article Picture"></img></Row>
        <Row className="news-box-title">{article.articleTitle}</Row>
        <Row className="news-box-date pl-4"><p>{article.dateTimeCreated}</p></Row>
        </Col>
        )}
    </>
    )
}

export default NewsArticleBox