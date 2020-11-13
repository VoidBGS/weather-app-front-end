import React from 'react'
import { Col, Row } from 'react-bootstrap'
import defineWeekDay from '../functions/defineWeekDay'
import defineDate from '../functions/defineDate'

const PrognosisDay2 = ({data}) =>{
    return(
      <Col xs={9} sm={9} lg={{}} className="weather-box mx-3 my-3">
        {data.list && (
          <>
            <Row className="weather-box-day justify-content-center pb-2">{defineWeekDay(2)}</Row>
            <Row className="weather-box-date justify-content-center">{defineDate(data.list[14].dt_txt)}</Row>
            <Row className="weather-box-icon justify-content-center mt-3"><img src={`https://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png`} alt={data.list[14].weather[0].description} style={{ width: '140px' }}></img></Row>
            <Row className="weather-box-temp justify-content-center mt-3"><div className="weather-box-temp-min pr-2">Min {Math.floor(data.list[14].main.temp_min)}°</div> /<div className="weather-box-temp-max pl-2">Max {Math.round(data.list[14].main.temp_max)}°</div></Row>
            <Row className="weather-box-desc justify-content-center">{data.list[14].weather[0].description}</Row>
          </>
        )}
      </Col>
    )
}

export default PrognosisDay2