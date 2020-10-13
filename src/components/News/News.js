import React from 'react'
import "./News.css"
import NewsBox from './NewsBox'
import NewsTitle from './NewsTitle'
import NewsArticleForm from './Form/NewsArticleForm'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const News = () =>{
    var rows = [];
    for (var i = 0; i < 5; i++) {
    rows.push(NewsBox());
    }

    
    return (
        <Router>
        <div>
        <NewsTitle/>
        <div class="news-page pt-3">
        {rows}
        </div>
        <Switch>
            <Route path="/Form" component={NewsArticleForm}/>
        </Switch>
        </div>
        </Router>
    )
}

export default News;