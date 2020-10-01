import React, {useContext} from "react"
import defineSeason from './functions/defineSeason'
import Context from '../Context'

const Main = () =>{
    const {currentWeather, weather, temperature, wind, data} = useContext(Context);
    const {humidity, pressure, temp} = temperature;
    const {speed} = wind;
    const {description, icon, main} = weather;
    const {name} = data;

    return(
        <div>
            <button onClick={currentWeather}>Get Data</button>
            {main && (<div className="city">
                <div className="city-flexbox">
                <div className="degrees">
                    <span>{Math.round(temp)}&deg;C</span>
                </div>
                <div className="city-name">
                    <span>{name}</span>
                    <sup>NL</sup><br/><br/>
                    <span className="city-season">{defineSeason()}</span>
                </div>
                </div>
                <div className="info-flexbox">
                    <p>Humidity: {humidity}%</p>
                    <p>Wind: {speed} km/h</p>
                    <p className="info-flexbox-description">{description}</p>
            </div>
            </div>
            )}
            <hr className="linebreak"></hr>
            </div>
    )
}

export default Main;