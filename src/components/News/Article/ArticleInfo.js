import React from 'react'
import {Row, Col} from 'react-bootstrap'

const ArticleInfo = ({article}) =>{


    const {dateTimeCreated, authorName, articlePictureCredit} = article.article; 
    
    return(
        <Row className="additional-info pb-4 pl-3">
            <Col className="pr-2" md={{ span: 1.5 }}>
                <p>{dateTimeCreated}</p>
            </Col> | <Col className="pl-2" md={{ span: 1.5 }}>
                <p>{authorName}</p>
            </Col>
            <Col md={{ offset: 4 }}>
                <p>Picture: {articlePictureCredit}</p>
            </Col>
        </Row>
    )
}

export default ArticleInfo