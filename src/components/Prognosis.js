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

                    </div>
                </Col>
                <Col>
                    <div className="weather-box">

                    </div>
                </Col>
                <Col>
                    <div className="weather-box">

                    </div>
                </Col>
            </Row>
            </div>
            <hr className="linebreak"></hr>
         </div>
    )
}

export default Prognosis;