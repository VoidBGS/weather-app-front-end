import React from 'react'
import { Col, Row } from 'react-bootstrap'
import defineWeekDay from '../functions/defineWeekDay'
import defineDate from '../functions/defineDate'

const PrognosisDay1 = ({data}) =>{
    return(
    <Col>
      {data.list &&(<div className="weather-box">
        <Col>
        <Row className="weather-box-day justify-content-center pb-2">{defineWeekDay(1)}</Row>
        <Row className="weather-box-date justify-content-center">{defineDate(data.list[7].dt_txt)}</Row>
        <Row className="weather-box-icon justify-content-center mt-3"><img src={`https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png`} alt={data.list[6].weather[0].description} style={{ width: '140px' }}></img></Row>
        <Row className="weather-box-temp justify-content-center mt-3"><div className="weather-box-temp-min pr-2">Min {Math.floor(data.list[6].main.temp_min)}°</div> /<div className="weather-box-temp-max pl-2">Max {Math.round(data.list[6].main.temp_max)}°</div></Row>
        <Row className="weather-box-desc justify-content-center">{data.list[6].weather[0].description}</Row>
        </Col>
      </div>
    )}
    </Col>
    )
}

export default PrognosisDay1