import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Prognosis = () =>{
    return(
         <div>
            <div className="weather-text"><p>3 Day Prognosis</p></div>
            <div className="pb-3">
            <Row className="pt-4 mb-5">
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
             </Row>
            </div>
            <hr className="linebreak"></hr>
         </div>
    )
}

export default Prognosis;