import React, {useState} from "react"
import { Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';

const LeafletMap = () => {
    const [map, setMap] = useState(null)
    const eindhovenCoordinates = [51.4416, 5.4697]

    const bounds = [
        [eindhovenCoordinates[0], eindhovenCoordinates[1]],
        [eindhovenCoordinates[0], eindhovenCoordinates[1]],
    ]

    const HandleChange = (e) => {
        SetMapRestrictions(e);
    }

    function SetMapRestrictions(foo){
        map.setZoom(foo);
        map.setMinZoom(foo);
        map.setView(eindhovenCoordinates, foo);
        (foo <= 2) ? map.setMaxBounds(null) : map.setMaxBounds(bounds)
    }

    return (
        <Col>
        <div className="infra-sat-map-wrapper m-4">
        <ToggleButtonGroup type="radio" name="options" defaultValue={"Europe"} onChange={HandleChange}>
             <ToggleButton variant="light" className="map-button" value={"12"}>Eindhoven</ToggleButton>
             <ToggleButton variant="light" className="map-button" value={"5"}>Europe</ToggleButton>
             <ToggleButton variant="light" className="map-button" value={"2"}>Worldwide</ToggleButton>
        </ToggleButtonGroup>
            <MapContainer center={[51.44083, 5.47778]} whenCreated={setMap} zoom={12} minZoom={1} scrollWheelZoom={false}>
                <LayersControl position="topright">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> | <a href="https://openweathermap.org/">OpenWeather</a>'
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
    )
}

export default LeafletMap