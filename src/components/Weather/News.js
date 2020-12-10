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
        if(data != undefined){
        setArticles(data);}
    }

    const rows = [];
    //Change the backend to return a number of articles.
    for (var i = 0; i < 3; i++) {
       rows.push(articles[i]);
    }

    return(
        <div>
            <Row className="weather-text"><p>Weather News</p></Row>
            {articles && (
                <Row className="news-box-wrap pb-5">
                    {rows.map(NewsArticleBox)}
                </Row>
            )}
        </div>
    )
}

export default News;