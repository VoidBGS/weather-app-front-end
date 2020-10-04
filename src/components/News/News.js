import React from 'react'
import "./News.css"
import NewsBox from './NewsBox'
import NewsTitle from './NewsTitle'

const News = () =>{
    var rows = [];
    for (var i = 0; i < 5; i++) {
    rows.push(NewsBox());
    }

    
    return (
        <div>
        <NewsTitle/>
        <div class="news-page pt-3">
        {rows}
        </div>
        </div>
    )
}

export default News;