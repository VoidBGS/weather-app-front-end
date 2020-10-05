import React from 'react'
import { Col, Row } from 'react-bootstrap'
import defineWeekDay from '../functions/defineWeekDay'
import defineDate from '../functions/defineDate'

const PrognosisDay1 = ({data}) =>{
  console.log(data);
    return(
    <Col>
      {data.list &&(<div className="weather-box">
        <Col>
        <Row className="weather-box-day justify-content-center pb-2">{defineWeekDay(1)}</Row>
        <Row className="weather-box-date justify-content-center">{defineDate(data.list[7].dt_txt)}</Row>
        <Row className="weather-box-icon justify-content-center mt-3"><img src={`https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`} alt={data.list[7].weather[0].description} style={{ width: '140px' }}></img></Row>
        <Row className="weather-box-temp justify-content-center mt-3">Min {Math.floor(data.list[4].main.temp_min)}° / Max {Math.round(data.list[7].main.temp_max)}°</Row>
        <Row className="weather-box-desc justify-content-center">{data.list[7].weather[0].description}</Row>
        </Col>
      </div>
    )}
    </Col>
    )
}

export default PrognosisDay1