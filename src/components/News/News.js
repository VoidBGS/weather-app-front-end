import React, {useState, useEffect} from 'react'
import "./News.css"
import NewsBox from './NewsBox'
import axios from 'axios'
import NewsTitle from './NewsTitle'
import {Row, Col, Button} from 'react-bootstrap'

const News = () =>{
     const URL = "https://localhost:44356/api/NewsArticles"
     const [article, setArticle] = useState({})
    
     const getArticles = async () =>{
        const response = await axios.get(URL).then(function (response){
            let {data} = response;
            setArticle(data)
          }).catch(function (error) {
            console.error(error);
          })
     }
    let rows = [];
    for (var i = 0; i < article.length; i++) {
    rows.push(NewsBox(article[i]));
    }
    useEffect(() => {
        getArticles()
      });
    return (
        <>
        <Row>
        <Col md={6}><NewsTitle/></Col>
        <Col md={{offset: 3}}><Button variant="warning" size="lg" href="News/Post" className="news-form-button m-4 px-4">Post Article</Button></Col>
        </Row>
        <div className="news-page pt-4">
         {rows}
        </div>
        </>
    )
}

export default News;