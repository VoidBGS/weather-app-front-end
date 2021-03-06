import React, {useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap';
import ImageBox from './ImageBox'
import {Link} from "react-router-dom";
import axios from 'axios'

const ImageSection = () => {
  const [pictures, setPictures] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  async function getPictures() {
    const data = await axios.get(URL + '/api/Pictures').then(function (response) {
      setPictures(response.data);
    }).catch(function (error) {
      console.error(error);
    })
  }

  useEffect(() => {
    getPictures()
  }, []);

  return pictures[0] ? (
    <Row className="picture-content ml-4 pl-2">
      {pictures.map(picture => (
        <Row>
          <Col className="mx-3 pb-2" key={picture.id}>
            <Link to={`Photos/${picture.id}`} style={{ textDecoration: 'none' }}><ImageBox picture={picture} /></Link>
          </Col>
        </Row>
      ))}
    </Row>
  ) : (
      <>
        <Row className="ml-4 pl-2">
          <div>
            <ImageBox picture={null} />
          </div>
        </Row>
      </>
    )
}

export default ImageSection;