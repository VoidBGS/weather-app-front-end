import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Maps.css'
import LeafletMap from './LeafletMap'

const Maps = () => {
    return (
        <>
            <Row className="justify-content-center" data-testid="maps-page-test" >
            <p className="maps-title">Weather Maps and Images</p>
            </Row>
            <Row className="map-page-wrapper m-3">
                <p className="maps-secondary-title ml-4">Interactive Weather Map</p>
                <LeafletMap/>
                <hr className="linebreak-darkened"></hr>
                <p className="maps-secondary-title ml-4">Infrared Satellite Image - Europe</p>
                <Col><div className="infra-sat-map-wrapper m-4"><img src="https://api.met.no/weatherapi/geosatellite/1.4/?area=europe&type=infrared" alt="meta-map" className="infra-sat-map p-4"></img></div></Col>
                <hr className="linebreak-darkened"></hr>
                <p className="maps-secondary-title ml-4">Satellite Image - Europe</p>
                <Col><div className="infra-sat-map-wrapper m-4"><img src="https://api.met.no/weatherapi/geosatellite/1.4/?area=europe&type=visible" alt="meta-map" className="infra-sat-map p-4"></img></div></Col>
            </Row>
        </>
    )
}

export default Maps;