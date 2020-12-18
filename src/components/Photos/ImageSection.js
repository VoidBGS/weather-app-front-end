import React, {useEffect, useState} from 'react'
import { Row } from 'react-bootstrap';
import ImageBox from './ImageBox'
import {Link} from "react-router-dom";
import axios from 'axios'

const ImageSection = () => {
  const [pictures, setPictures] = useState([]);
  const URL = "https://localhost:5001/api/Pictures"

  async function getPictures() {
    const data = await axios.get(URL).then(function (response) {
      setPictures(response.data);
    }).catch(function (error) {
      console.error(error);
    })
  }

  useEffect(() => {
    getPictures()
  }, [pictures]);

  return pictures[0] ? (
    <Row className="picture-content ml-4 pl-2">
      {pictures.map(picture => (
        <div key={picture.id}>
          <Link to={`News/Article/${picture.id}`} style={{ textDecoration: 'none' }}><ImageBox picture={picture} /></Link>
        </div>
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