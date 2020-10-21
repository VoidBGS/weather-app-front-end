import React, {useState, useEffect} from 'react'
import { Row } from 'react-bootstrap'
import {getArticles} from '../News/getArticles'
import NewsArticleBox from './NewsArticleBox'

const News = () =>{
    const [articles, setArticles] = useState({});

    useEffect(() =>{
        // fetchAPI();    
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
            <div className="weather-text"><p>Weather News</p></div>
            <div className="pb-3">
            <Row className="pt-4 mb-5">
             {rows}
            </Row>
            </div>
         </div>
    )
}

export default News;