import React, {useEffect, useState} from 'react'
import { Row } from 'react-bootstrap';
import ImageBox from './ImageBox'
import axios from 'axios'

const ImageSection = () =>{
    const [pictures, setPictures] = useState([]);
    const URL = "https://localhost:5001/api/Pictures" 

     async function getPictures(){
        const data  = await axios.get(URL).then(function (response){
            setPictures(response.data);
          }).catch(function (error) {
            console.error(error);
          })
     }
    
     useEffect(() => {
        getPictures()
      }, [pictures]);

    return pictures[0] ? (
        <Row>
             {pictures.map(picture => (
            <div key={picture.id}>
               <ImageBox picture={picture}/>
            </div>
          ))}
        </Row>
    ) : (
      <>
       <Row>
            <div >
               <ImageBox picture={null}/>
            </div>
        </Row>
      </>
    )
}

export default ImageSection;