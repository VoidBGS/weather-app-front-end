import React from 'react'
import { Row, Col } from 'react-bootstrap';
import MapsTitle from './MapsTitle.js'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './Maps.css'

const Maps = () => {
    return (
        <>
            <Row className="justify-content-center" data-testid="maps-page-test" >
                <MapsTitle></MapsTitle>
            </Row>
            <Row className="map-page-wrapper m-3">
               <p className="maps-secondary-title ml-4">Interactive Map - Eindhoven</p>
                <Col>
                    <div className="infra-sat-map-wrapper m-4">
                        <MapContainer center={[51.44083, 5.47778]} zoom={12} scrollWheelZoom={true}>
                            <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        </MapContainer>
                    </div>
                </Col>
                <p className="maps-secondary-title ml-4">Infrared Satellite Image - Europe</p>
                <Col><div className="infra-sat-map-wrapper m-4"><img src="https://api.met.no/weatherapi/geosatellite/1.4/?area=europe&type=infrared" alt="meta-map" className="infra-sat-map p-4"></img></div></Col>
                <hr className="linebreak-darkened"></hr>
                <p className="maps-secondary-title ml-4">Satellite Image - Europe</p>
                <Col><div className="infra-sat-map-wrapper m-4"><img src="https://api.met.no/weatherapi/geosatellite/1.4/?area=europe&type=visible" alt="meta-map" className="infra-sat-map p-4"></img></div></Col>
                <hr className="linebreak-darkened"></hr>
            </Row>
        </>
    )
}

export default Maps;