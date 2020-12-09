import React, {useState, useEffect} from 'react'
import "./News.css"
import NewsBox from './NewsBox'
import {getArticles} from './getArticles'
import NewsTitle from './NewsTitle'
import {Link} from "react-router-dom";
import {Row, Col, Button} from 'react-bootstrap'

const News = () =>{
  useEffect(() => {
    callAPI();
    }, []);

     const [articles, setArticles] = useState([])
     
     const callAPI = async () =>{
     const {data} = await getArticles();
      if(data != undefined){
      setArticles(reverseArticles(data));}
    }
    
    function reverseArticles(array){
      return array.reverse()
    }
    
    return articles ? (
      <>
        <Row className="justify-content-center"  >
              <NewsTitle />
        </Row>
        <Col className="news-article-background py-4 my-4">
          {sessionStorage.getItem('Token') ? (
          <Button variant="warning" size="lg" href="News/Post" className="news-button ml-5">Post Article</Button>
          ) : null}
          {articles.map(article => (
            <div key={article.id}>
              <Link to={`News/Article/${article.id}`}>{NewsBox(article)}</Link>
            </div>
          ))}
        </Col>
      </>
    ) : null
}

export default News;