import React from 'react'
import { Col, Row } from 'react-bootstrap'
import defineWeekDay from './functions/defineWeekDay'
import defineDate from './functions/defineDate'

const PrognosisDay2 = ({data}) =>{
    return(
    <Col>
      {data.main &&(<div className="weather-box">
        <Col>
        <Row className="weather-box-day justify-content-center pb-2">{defineWeekDay(2)}</Row>
        <Row className="weather-box-date justify-content-center">{defineDate(data.dt_txt)}</Row>
        <Row className="weather-box-icon justify-content-center mt-3"><img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} style={{ width: '140px' }}></img></Row>
        <Row className="weather-box-temp justify-content-center mt-3">Min {Math.floor(data.main.temp_min)}° / Max {Math.round(data.main.temp_max)}°</Row>
        <Row className="weather-box-desc justify-content-center">{data.weather[0].description}</Row>
        </Col>
      </div>
      )}
    </Col>
    )
}

export default PrognosisDay2