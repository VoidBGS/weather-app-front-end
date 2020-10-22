import React from 'react'
import {Row} from 'react-bootstrap'

const ArticleTop = ({match}) =>{
    console.log(match)
    return(
    <Row>
    <div className="article-image-wrapper">
    <img src="https://i.ibb.co/6ng9c19/road1.webp" className="article-img"></img>
    <div className="text-wrapper px-5 pb-3">
    <Row className="article-title"><h1>Your title article goes here</h1></Row>
    </div>
    </div>
    </Row>
    )
}

export default ArticleTop