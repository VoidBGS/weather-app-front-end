import React from 'react'
import {Row} from 'react-bootstrap'

const ArticleTop = ({article}) =>{
    
    const {articlePicture, articleTitle} = article

    return(
        <Row>
            <div className="article-image-wrapper">
                <img src={articlePicture} alt="" className="article-img"></img>
                <div className="text-wrapper px-5 pb-3">
                    <Row className="article-title"><h1>{articleTitle}</h1></Row>
                </div>
            </div>
        </Row>
    )
}

export default ArticleTop