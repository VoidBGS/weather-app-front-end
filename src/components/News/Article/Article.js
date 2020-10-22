import React from 'react'
import './Article.css'
import {Col} from 'react-bootstrap'
import ArticleContent from './ArticleContent'
import ArticleTop from './ArticleTop'

const Article = ({match}) =>{
  console.log(match)
    return(
    <Col md={{ span: 11, offset: 0.9 }} className="p-4 ml-5">
    <ArticleTop match={match}/>
    <ArticleContent/>
    </Col>
    )
}

export default Article