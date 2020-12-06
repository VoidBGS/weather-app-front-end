import React, {useState} from 'react'
import {Col, Row, Button, Form} from 'react-bootstrap'
import ImageUploader from 'react-images-upload';

export default function UploadPicture() {
    const [isLoading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);
    const [picture, setPicture] = useState({})

    const handleClick = () => setLoading(true);

    const handleUpload = async (image) =>{ setPicture(image) }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        console.log(picture)
    }

    return (
        <Col>
            <Row className="justify-content-center">
                   <div className="picture-image-upload-wrapper">
                       <Form noValidate className="picture-image-upload-wrapper mx-auto" validated={validated} onSubmit={handleSubmit}>
                         <ImageUploader className="picture" withPreview={true} onChange={handleUpload}>
                         </ImageUploader>
                         <Button variant="dark" size="lg" type="submit" disabled={isLoading} onClick={!isLoading ? handleClick : null} className="picture-upload-button mb-4" block> {isLoading ? 'Loading…' : 'Upload Photo'}</Button>
                       </Form>
                    </div>
            </Row>
        </Col>
    )
}
