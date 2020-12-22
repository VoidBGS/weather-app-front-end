import React from 'react'
import PhotosTitle from './PhotosTitle'
import './Photos.css'
import ImageSection from './ImageSection'
import {getUser} from '../../user'
import { Row, Button } from 'react-bootstrap';

const Photos = () =>{
    console.log(getUser());
    return(

        <>
            <Row className="justify-content-center"  >
                <PhotosTitle />
            </Row>
            {getUser() ? (
                <Button variant="warning" size="lg" href="Photos/Upload" className="upload-page-button ml-5 mb-3">Post Picture Of The Day</Button>
            ) : null}
            <ImageSection />
        </>
    )
}

export default Photos;