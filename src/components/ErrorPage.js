import React from 'react';
import {Row, Col} from 'react-bootstrap'

const ErrorPage  = () =>{
    return(
        <Row className="pl-5" data-testid="errorpage-test" >
            <Col md={{ span: 2 }}>
                <p className="error-page-text">Error</p>
                <p className="error-page-number pl-3">404</p>
            </Col>
            <Col>
                <div className="error-page-message p-5">
                    <p><strong>Oops!</strong><br></br>
                     We could not find the page you were looking for :(</p>
                </div>
            </Col>
        </Row>
    )
}

export default ErrorPage;