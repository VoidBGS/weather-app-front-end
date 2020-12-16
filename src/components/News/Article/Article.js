import React, {useState, useEffect} from 'react'
import './Article.css'
import {Col} from 'react-bootstrap'
import ArticleContent from './ArticleContent'
import ArticleTop from './ArticleTop'
import axios from 'axios'

const Article = ({match}) =>{

   useEffect(() => {
     getArticle();
   }, [])

  const ID = match.params.id;
  const URL = process.env.REACT_APP_API_URL

  const [article, setArticle] = useState({})

    const getArticle = async (id) =>{
    const response = await axios.get(URL + `/api/NewsArticles/${ID}`)
    .then(function (response){
      setArticle(response.data);
    }).catch(function (error) {
      console.error(error);
      window.location.replace(`/NotFound`)
    })
   }

  return article.id ? (
    <>
      <Col md={{ span: 11, offset: 0.9 }} data-testid="article-test" className="p-4 ml-5">
        <ArticleTop article={article} />
        <ArticleContent article={article} />
      </Col>
    </>
  ) : (
    <Col md={{ span: 11, offset: 0.9 }} className="article-loading p-4 ml-5">
    </Col>
  )
}

export default Article