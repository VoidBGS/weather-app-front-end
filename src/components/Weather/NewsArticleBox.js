import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import {Link} from "react-router-dom";


const NewsArticleBox = (article) =>{
    console.log(article)
    return(
    <>
        {article &&(
            
        <Col xs={9} sm={9} lg={{ }} className="news-box mx-3 my-3" >
         <Link to={`News/Article/${article.id}`} style={{ textDecoration: 'none' }}>
        <Row className="justify-content-center"><img src={article.articlePicture} className="news-box-picture"></img></Row>
        <Row className="news-box-title"><p>{article.articleTitle}</p></Row>
        </Link>  
        <Row className="news-box-date pl-4"><p>{article.dateTimeCreated}</p></Row>
        </Col>
        )}
    </>
    )
}

export default NewsArticleBox