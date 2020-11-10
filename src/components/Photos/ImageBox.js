import React from 'react'
import { Col } from 'react-bootstrap';

const ImageBox = () =>{
    return(
         <Col lg={{span:4}} >
         <div className="image-box">
         <img src="https://i.ibb.co/p4HhZgQ/Mountain-and-waterfall-at-Logan-Pass-at-sunset-in-Glacier-National-Park-Montana.jpg"  alt="Problem with loading" style={{ width: '365px' }}></img>
         <p className="p-3">Posted by</p>
         </div>
         </Col>
    )
}

export default ImageBox;