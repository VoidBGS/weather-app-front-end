import React from 'react'
import { Col, Row } from 'react-bootstrap'

const PrognosisDay3 = () =>{
    return(
    <Col>
                 <div className="weather-box">
                   <Col>
                   <Row className="weather-box-day justify-content-center">Day</Row>
                   <Row className="weather-box-date justify-content-center">Date</Row>
                   <Row className="weather-box-icon justify-content-center mt-4"><img src="https://i.ibb.co/NNRVhpB/sunny.png"  style={{ width: '140px' }}></img></Row>
                   <Row className="weather-box-temp justify-content-center mt-5">Min/Max</Row>
                   </Col>
                 </div>
             </Col>
    )
}

export default PrognosisDay3