import React from 'react'
import { Row, Col } from 'react-bootstrap';
import MapsTitle from './MapsTitle.js'
import {MapContainer, TileLayer, LayersControl} from 'react-leaflet';
import './Maps.css'

const Maps = () => {
    const bounds = [
        [51.4416, 5.4697],
        [51.4416, 5.4697],
      ]

    return (
        <>
            <Row className="justify-content-center" data-testid="maps-page-test" >
                <MapsTitle></MapsTitle>
            </Row>
            <Row className="map-page-wrapper m-3">
               <p className="maps-secondary-title ml-4">Interactive Map - Eindhoven</p>
                <Col>
                    <div className="infra-sat-map-wrapper m-4">
                        <MapContainer center={[51.44083, 5.47778]} zoom={5} minZoom={5} scrollWheelZoom={false} maxBounds={bounds}>
                        <LayersControl position="topright">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        <LayersControl.BaseLayer checked name="Temperature">
                            <TileLayer url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=3eb784b45ba4acbd7f9a6ec8a4e06841" zIndex={10} opacity={3} />
                        </LayersControl.BaseLayer>
                        <LayersControl.BaseLayer name="Wind">
                            <TileLayer url="https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=3eb784b45ba4acbd7f9a6ec8a4e06841" zIndex={10} opacity={3}/>
                        </LayersControl.BaseLayer>
                        <LayersControl.BaseLayer name="Precipitation">
                            <TileLayer url="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=3eb784b45ba4acbd7f9a6ec8a4e06841" zIndex={10} opacity={3}/>
                        </LayersControl.BaseLayer>
                        </LayersControl>
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