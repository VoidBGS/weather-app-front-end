import React from 'react'
import { Col, Row } from 'react-bootstrap';

const ImageBox = ({picture}) =>{
    console.log(picture)
    return picture ?(
        <Col lg={{ span: 4 }} >
            <div className="image-box">
                <img src={picture.link} alt="Problem with loading" style={{ width: '320px', height: '235px' }}></img>
                <p className="image-box-text p-2">{picture.authorName}</p>
            </div>
        </Col>
    ) : (
        <>
        <Row className="mr-3">
        <Col lg={{ span: 4 }} >
        <div className="image-box-loading m-3">
        </div>
        </Col>
        <Col lg={{ span: 4 }} >
        <div className="image-box-loading m-3">
        </div>
        </Col>
        <Col lg={{ span: 4 }} >
        <div className="image-box-loading m-3">
        </div>
        </Col>
        </Row>
        </>
    )
}

export default ImageBox;