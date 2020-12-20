import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Col, Row} from 'react-bootstrap'
import axios from 'axios'

export default function PicturePage() {
    let {id} = useParams();
    const [picture , setPicture] = useState(null)
    const URL = process.env.REACT_APP_API_URL;

    const getPicture = async (id) =>{
        axios.get(URL + `/api/Pictures/${id}`).
        then((response)=>{
            setPicture(response.data)
            console.log(response.data);
        }).catch((error) =>{
            console.error(error)
        })
    }

    useEffect( () => {
        getPicture(id)
    }, [])

    return  picture ? (
        <Col>
            <Row className="justify-content-center p-3">
                <div className="picture-image-wrapper">
                    <img src={picture.link} alt="" className="picture-img"></img>
                    <Col className="picture-details">
                        <h4 className="p-3">{picture.authorName} - {picture.dateTimeCreated}</h4>
                    </Col>
                </div>
            </Row>
        </Col>
    ) : (
        <Row className="justify-content-center">
            <div className="picture-loading mb-4"></div>
        </Row>
    )
}
