import React, {useState, useEffect} from 'react'
import "./News.css"
import NewsBox from './NewsBox'
import {getArticles} from './getArticles'
import NewsTitle from './NewsTitle'
import {Row, Col, Button} from 'react-bootstrap'

const News = () =>{
     const [article, setArticle] = useState({})


     const callAPI = async () =>{
      const data = await getArticles();
      setArticle(data.data);
    }
    useEffect(() => {
      callAPI();
      }, []);
      console.log(article)

    let rows = [];
    for (var i = 0; i < article.length; i++) {
    rows.push(NewsBox(article[i]));
    }
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