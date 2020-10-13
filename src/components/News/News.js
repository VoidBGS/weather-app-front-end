import React from 'react'
import "./News.css"
import NewsBox from './NewsBox'
import NewsTitle from './NewsTitle'
import {Row, Col, Button} from 'react-bootstrap'
import {BrowserRouter as Router, Link} from "react-router-dom";

const News = () =>{
    var rows = [];
    for (var i = 0; i < 5; i++) {
    rows.push(NewsBox());
    }

    
    return (
        <Router>
        <Row>
        <Col md={6}><NewsTitle/></Col>
        <Col md={{offset: 3}}><Button variant="warning" size="lg" href="News/Post" className="news-form-button m-4 px-4">Post Article</Button></Col>
        </Row>
        <div class="news-page pt-3">
        {rows}
        </div>
        </Router>
    )
}

export default News;