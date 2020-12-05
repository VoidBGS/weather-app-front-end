import React, {useState, useEffect} from "react"
import { Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { MapContainer, TileLayer, LayersControl, setZoom } from 'react-leaflet';

const LeafletMap = () => {

    const [zoom, setZoom] = useState(5)
    const [map, setMap] = useState(null)

    const bounds = [
        [51.4416, 5.4697],
        [51.4416, 5.4697],
    ]
    const center = [51.4416, 5.4697]

    const HandleChange = (e) => {
        if(e == "Europe"){
            map.setZoom(5)
            map.setView(center, 5);
        }
        else if (e == "World"){
            map.setZoom(1)
            map.setView(center, 12);
        }
    }
    console.log(zoom);
    return (
        <Col>
        <div className="infra-sat-map-wrapper m-4">
        <ToggleButtonGroup type="radio" name="options" defaultValue={"Europe"} onChange={HandleChange}>
             <ToggleButton variant="light" className="map-button" value={"Europe"}>Europe, Eindhoven</ToggleButton>
             <ToggleButton variant="light" className="map-button" value={"World"}>Worldwide</ToggleButton>
        </ToggleButtonGroup>
            <MapContainer center={[51.44083, 5.47778]}  whenCreated={setMap} zoom={zoom} minZoom={zoom} scrollWheelZoom={false}>
                <LayersControl position="topright">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> | <a href="https://openweathermap.org/">OpenWeather</a>'
                        url="https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl>
            </MapContainer>
        </div>
    </Col>
    )
}

export default LeafletMap