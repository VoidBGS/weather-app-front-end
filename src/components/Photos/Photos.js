import React from 'react'
import PhotosTitle from './PhotosTitle'
import './Photos.css'
import ImageSection from './ImageSection'
import { Row, Button } from 'react-bootstrap';

const Photos = () =>{
    return(
        <>
            <Row className="justify-content-center"  >
                <PhotosTitle />
            </Row>
            {sessionStorage.getItem('Token') ? (
                <Button variant="warning" size="lg" href="Photos/Upload" className="upload-page-button ml-5 mb-3">Post Picture Of The Day</Button>
            ) : null}
            <ImageSection />
        </>
    )
}

export default Photos;