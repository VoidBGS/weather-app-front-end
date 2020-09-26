import React from 'react'
import { Col, Row } from 'react-bootstrap'


const Prognosis = () =>{
    return(
         <div>
            <div className="prognosis-text"><p>3 Day Prognosis</p></div>
            <div className="pb-3">
            <Row className="pt-4 mb-5">
                <Col>
                    <div className="prognosis-box">

                    </div>
                </Col>
                <Col>
                    <div className="prognosis-box">

                    </div>
                </Col>
                <Col>
                    <div className="prognosis-box">

                    </div>
                </Col>
            </Row>
            </div>
            <hr className="linebreak mb-5"></hr>
         </div>
    )
}

export default Prognosis;