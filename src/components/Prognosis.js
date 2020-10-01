import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PrognosisDay1 from './PrognosisDay1'
import PrognosisDay2 from './PrognosisDay2'
import PrognosisDay3 from './PrognosisDay3'

const Prognosis = () =>{
    return(
         <div>
            <div className="weather-text"><p>3 Day Prognosis</p></div>
            <div className="pb-3">
            <Row className="pt-4 mb-5">
               <PrognosisDay1/>
               <PrognosisDay2/>
               <PrognosisDay3/>
             </Row>
            </div>
            <hr className="linebreak"></hr>
         </div>
    )
}

export default Prognosis;