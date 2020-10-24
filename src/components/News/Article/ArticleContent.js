import React from 'react'
import {Row, Button} from 'react-bootstrap'
import ArticleInfo from './ArticleInfo'
import {Link} from "react-router-dom";

const ArticleContent = ({article}) => {
    return(
    <Row>
        <div className="article-content-text">
        <ArticleInfo article={{article}}/>
        {article.articleContent}
        </div>
        <Button variant="warning" size="lg" href={`${article.id}/Edit`} className="news-form-button my-4" block>Edit Article</Button>
    </Row>
)}

export default ArticleContent;