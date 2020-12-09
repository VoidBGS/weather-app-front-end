import React from 'react'
import { Col } from 'react-bootstrap';

const ImageBox = ({picture}) =>{
    console.log(picture)
    return picture ?(
        <Col lg={{ span: 4 }} >
            <div className="image-box">
                <img src={picture.link} alt="Problem with loading" style={{ width: '340px', height: '235px' }}></img>
                <p className="p-3">{picture.authorName}</p>
            </div>
        </Col>
    ) : null
}

export default ImageBox;