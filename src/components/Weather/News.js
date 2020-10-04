import React from 'react'
import { Col, Row } from 'react-bootstrap'

const News = () =>{
    return(
         <div>
            <div className="weather-text"><p>Weather News</p></div>
            <div className="pb-3">
            <Row className="pt-4 mb-5">
                <Col>
                    <div className="news-box">
                    <Row className="news-box-icon justify-content-center mt-4"><img src="https://i.ibb.co/MnJZGXL/road.jpg"  alt="Problem with loading" style={{ width: '350px' }}></img></Row>
                    <Row className="news-box-temp justify-content-center mt-5">News Story</Row>
                    </div>
                </Col>
                <Col>
                    <div className="news-box">
                    <Row className="news-box-icon justify-content-center mt-4"><img src="https://i.ibb.co/MnJZGXL/road.jpg"  alt="Problem with loading" style={{ width: '350px' }}></img></Row>
                    <Row className="news-box-temp justify-content-center mt-5">News Story</Row>
                    </div>
                </Col>
                <Col>
                    <div className="news-box">
                    <Row className="news-box-icon justify-content-center mt-4"><img src="https://i.ibb.co/MnJZGXL/road.jpg"  alt="Problem with loading" style={{ width: '350px' }}></img></Row>
                    <Row className="news-box-temp justify-content-center mt-5">News Story</Row>
                    </div>
                </Col>
            </Row>
            </div>
         </div>
    )
}

export default News;