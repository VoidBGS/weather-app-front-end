import React, { useState } from 'react';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { weatherData } from '../api/weatherData';


const App = () => {

    // const [weather, setWeather] = useState({});
    // const setAPI = async ()=>{
    // const data = await weatherData();
    // setWeather(data);
    //}
        return (
        <Container>
            <Navigation/>
                <div className="city">
                    <flex className="city-flexbox">
                    <div className="degrees">
                        <span>12&deg;C</span>
                    </div>
                    <div className="city-name">
                        <span>Eindhoven</span>
                        <sup>NL</sup><br/><br/>
                        <span className="city-season">Autumn</span>
                    </div>
                    </flex>
                    <flex className="info-flexbox">
                        <p>Humidity</p>
                        <p>Wind</p>
                        <p>Slightly rainy</p>
                    </flex>
                </div>
                <hr className="linebreak"></hr>
       </Container>
    );
}

export default App;