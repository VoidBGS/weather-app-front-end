import React from 'react'
import {Row, Col} from 'react-bootstrap'

const ArticleInfo = ({article}) =>{

    return(
        <Row className="additional-info pb-4 pl-3">
        <Col className="pr-2" md={{ span:1.5 }}>
        <p>{article.article.dateTimeCreated}</p>
        </Col> | <Col className="pl-2" md={{ span:1.5 }}>
        <p>Author</p>
        </Col>
        <Col md={{ offset:4 }}>
        <p>Picture: {article.article.articlePictureCredit}</p>
        </Col>
        </Row>
    )
}

export default ArticleInfo