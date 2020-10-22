import React from 'react'
import {Row, Col} from 'react-bootstrap'

const ArticleInfo = () =>{
    return(
        <Row className="additional-info pb-4 pl-3">
            <Col className="pr-2" md={{ span:1.5 }}>
                <p>Posted on</p>
            </Col> | <Col className="pl-2" md={{ span:1.5 }}>
                <p>Auhor</p>
            </Col>
            <Col md={{ offset:7 }}>
                <p>Credit Picture</p>
            </Col>
        </Row>
    )
}

export default ArticleInfo