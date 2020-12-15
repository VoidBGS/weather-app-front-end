import React, {useState} from "react"
import { Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';

const LeafletMap = () => {
    const [map, setMap] = useState(null)
    const eindhovenCoordinates = [51.4416, 5.4697]
    const API_KEY = process.env.REACT_APP_OPENWEATHER_MAPS_KEY
    const URL_TEMP = `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`
    const URL_WIND = `https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`
    const URL_PRECIPITATION = `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`


    const bounds = [
        [eindhovenCoordinates[0], eindhovenCoordinates[1]],
        [eindhovenCoordinates[0], eindhovenCoordinates[1]],
    ]

    const HandleChange = (e) => {
        SetMapRestrictions(e);
    }

    function SetMapRestrictions(foo){
        console.log(foo)
        map.setZoom(foo);
        map.setMinZoom(foo);
        map.setMaxZoom(foo);
        map.setView(eindhovenCoordinates, foo);
        if(foo <= 2){map.setMaxBounds([[180, 180], [[-180, -180]]]); map.setMaxZoom(undefined);}
        else{map.setMaxBounds(bounds)}
    }

    return (
        <Col>
        <div className="infra-sat-map-wrapper m-4">
        <ToggleButtonGroup type="radio" name="options" defaultValue={"4"} onChange={HandleChange}>
             <ToggleButton variant="light" className="map-button" value={"12"}>Eindhoven</ToggleButton>
             <ToggleButton variant="light" className="map-button" value={"4"}>Europe</ToggleButton>
             <ToggleButton variant="light" className="map-button" value={"2"}>Worldwide</ToggleButton>
        </ToggleButtonGroup>
            <MapContainer center={[51.44083, 5.47778]} whenCreated={setMap} zoom={4} minZoom={4} scrollWheelZoom={false}>
                <LayersControl position="topright">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> | <a href="https://openweathermap.org/">OpenWeather</a>'
                        url="https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                     <LayersControl.BaseLayer checked name="Temperature">
                            <TileLayer url={URL_TEMP} zIndex={10} opacity={100} />
                        </LayersControl.BaseLayer>
                        <LayersControl.BaseLayer name="Wind">
                            <TileLayer url={URL_WIND} zIndex={10} opacity={100}/>
                        </LayersControl.BaseLayer>
                        <LayersControl.BaseLayer name="Precipitation">
                            <TileLayer url={URL_PRECIPITATION} zIndex={10} opacity={100}/>
                        </LayersControl.BaseLayer>
                </LayersControl>
            </MapContainer>
        </div>
    </Col>
    )
}

export default LeafletMap