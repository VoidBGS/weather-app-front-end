import React, {useState, useEffect} from 'react'
import './Article.css'
import {Col, Button} from 'react-bootstrap'
import ArticleContent from './ArticleContent'
import ArticleTop from './ArticleTop'
import axios from 'axios'

const Article = ({match}) =>{

   useEffect(() => {
     getArticle();
   }, [])

  const ID = match.params.id;
  const URL = `https://localhost:44356/api/NewsArticles/${ID}`

  const [article, setArticle] = useState({})

   const getArticle = async (id) =>{
    const response = await axios.get(URL)
    .then(function (response){
      setArticle(response.data);
    }).catch(function (error) {
      console.error(error);
      window.location.replace(`http://localhost:3000/NotFound`)
    })
   }

   return(
    <>
    {article.id && (
    <Col md={{ span: 11, offset: 0.9 }} data-testid="article-test"  className="p-4 ml-5">
    <ArticleTop article={article}/>
    <ArticleContent article={article}/>
    </Col>
    )}
    </>
    )
}

export default Article