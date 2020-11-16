import React, {useState, useEffect} from "react"
import defineSeason from '../functions/defineSeason'
import axios from 'axios';
import {Row, Col} from 'react-bootstrap'

const Main = () =>{


    const [weather, setWeather] = useState({});
    const [temperature, setTemperature] = useState({});
    const [wind, setWind] = useState({});
    const [city, setCity] = useState("");


    const currentWeather = async () =>{
        const API_KEY = '1266751b2faa16b328461cfc57e7f4d8';
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=51.441643&lon=5.478000&apikey=${API_KEY}&units=metric`;
           const request = axios.get(URL).then(function (response){
            setWeather(response.data.weather[0]);
            setTemperature(response.data.main);
            setWind(response.data.wind);
            setCity(response.data.name);
          }).catch(function (error) {
            console.error(error);
          })
           //Set only one set hook or use conistant hooks
        }
        useEffect(() => {
            currentWeather()
          }, []);

    const {humidity, temp} = temperature;
    const {speed} = wind;
    const {description, main} = weather;

    return main ? (
        <>
            <Row>
                <Col xs={9} sm={9} md={6} lg={{}} className="city ml-4">
                    <Row className="city-flexbox">
                        <Col className="degrees ml-2">
                            <span>{Math.round(temp)}&deg;C</span>
                        </Col>
                        <Col lg={{ offset: 2 }} className="city-name">
                            <span>{city}</span>
                            <sup>NL</sup><br /><br />
                            <span className="city-season">{defineSeason()}</span>
                        </Col>
                    </Row>
                    <Row className="info-flexbox mx-3">
                        <p><b>Humidity:</b> {humidity}%</p>
                        <p><b>Wind:</b> {speed} km/h</p>
                        <p className="info-flexbox-description"><b>{description}</b></p>
                    </Row>
                </Col>
            </Row>
            <hr className="linebreak"></hr>
        </>
    ) : null
}

export default Main;