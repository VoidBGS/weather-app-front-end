import React, {useState, useEffect} from 'react'
import { Row } from 'react-bootstrap'
import {getArticles} from '../News/getArticles'
import NewsArticleBox from './NewsArticleBox'

const News = () =>{
    const [articles, setArticles] = useState({});

    useEffect(() =>{
        fetchAPI();    
    }, [])

    async function fetchAPI(){
        const {data} = await getArticles();
         
        setArticles(data);
    }

    const rows = [];

    for (var i = 0; i < 3; i++) {
       rows.push(NewsArticleBox(articles[i]));
    }

    return(
         <div>
            <Row className="weather-text"><p>Weather News</p></Row>
            <Row className="pb-3">
             {rows}
            </Row>
         </div>
    )
}

export default News;