import React from 'react'
import { Row } from 'react-bootstrap';
import ImageBox from './ImageBox'

const ImageSection = () =>{
    return(
        <Row>
            <ImageBox />
            <ImageBox />
            <ImageBox />
        </Row>
    )
}

export default ImageSection;