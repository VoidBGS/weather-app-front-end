import React from 'react'
import {Row} from 'react-bootstrap'
import ArticleInfo from './ArticleInfo'

const ArticleContent = ({article}) => {
    return(
    <Row>
        <div className="article-content-text">
        <ArticleInfo article={{article}}/>
        {article.articleContent}
        </div>
    </Row>
)}

export default ArticleContent;