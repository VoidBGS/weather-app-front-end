import React from 'react'
import { Col, Row } from 'react-bootstrap'


const News = () =>{
    return(
         <div>
            <div className="weather-text"><p>Weather News</p></div>
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
         </div>
    )
}

export default News;