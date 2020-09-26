import React from "react"

const Main = () =>{
    return(
        <div>
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
            </div>
    )
}

export default Main;