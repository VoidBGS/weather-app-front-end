import React from 'react'
import {Row, Button} from 'react-bootstrap'
import ArticleInfo from './ArticleInfo'
import formatContent from '../../functions/formatContent'

const ArticleContent = ({article}) => {

    const {id, articleContent} = article

    return(
        <Row>
            <div className="article-content-text bold">
                <ArticleInfo article={{ article }} />
                {formatContent(articleContent)}
            </div>
            {sessionStorage.getItem('Token') ? (
            <Button variant="warning" size="lg" href={`${id}/Edit`} className="news-form-button my-4" block>Article Settings</Button>
            ) : null}
        </Row>
    )
}

export default ArticleContent;