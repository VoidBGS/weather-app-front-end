import React from 'react'
import {Row} from 'react-bootstrap'

const ArticleTop = ({article}) =>{
    return(
    <Row>
    <div className="article-image-wrapper">
    <img src={article.articlePicture} className="article-img"></img>
    <div className="text-wrapper px-5 pb-3">
    <Row className="article-title"><h1>{article.articleTitle}</h1></Row>
    </div>
    </div>
    </Row>
    )
}

export default ArticleTop