import React, {useState} from 'react'
import {Col, Row, Button, Form} from 'react-bootstrap'
import ImageUploader from 'react-images-upload';
import { useHistory } from "react-router-dom";
import axios from 'axios'

export default function UploadPicture() {
    const [isLoading, setLoading] = useState(false);
    const URL = process.env.REACT_APP_CLOUDINARY_URL;
    const [validated, setValidated] = useState(false);
    const [picture, setPicture] = useState([])
    let history = useHistory();
    const handleClick = () => setLoading(true);

    const handleUpload = async (image) =>{ setPicture(image) }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        const data = new FormData()
        data.append('file', picture[0])
        data.append('upload_preset', 'Weatherhoven')
        console.log(picture)
        
        axios.post(URL + "/image/upload", data).then(function (response){
            SavePicture(response.data.secure_url)
        }).catch(function (error){
            console.error(error);
        })
    
    const SavePicture = async (link) =>{
        if(link === ""){
            alert("Something went wrong...")
            return
        }
        let data = JSON.stringify({
            AuthorName: sessionStorage.getItem('Name'),
            Link: link,
        });

        axios.post("https://localhost:44356/api/Pictures", data, {
            headers: {
                'Content-Type': 'application/json'
                }
        })
        setLoading(false);
        history.replace("/Photos")
    }
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
