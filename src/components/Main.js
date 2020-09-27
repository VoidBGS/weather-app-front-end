import React, {useContext} from "react"
import Context from '../Context'

const Main = () =>{
    const {weather, callApi} = useContext(Context);
    const {humidity, pressure, temp} = weather;
    return(
        <div onLoad={callApi()}>
            <div className="city">
                <div className="city-flexbox">
                <div className="degrees">
                    <span>{Math.round(temp)}&deg;C</span>
                </div>
                <div className="city-name">
                    <span>Eindhoven</span>
                    <sup>NL</sup><br/><br/>
                    <span className="city-season">Autumn</span>
                </div>
                </div>
                <div className="info-flexbox">
                    <p>{humidity}</p>
                    <p>Wind</p>
                    <p>Slightly rainy</p>
            </div>
            </div>
            <hr className="linebreak"></hr>
            </div>
    )
}

export default Main;