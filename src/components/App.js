import React, { useState } from 'react'
import Navigation from './Navigation'
import Main from './Main'
import News from './News'
import Footer from './Footer'
import Prognosis from './Prognosis'

import axios from 'axios'
import Context from '../Context'

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

const App = () => {

    const [weather, setWeather] = useState({});
    const [temperature, setTemperature] = useState({});
    const [wind, setWind] = useState({});
    const [data, setData] = useState({});
    const [forecast, setForecast] = useState({});

    const currentWeather = async () =>{
        const API_KEY = 'a0584d716e9b992064ad01890816506d';
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=51.441643&lon=5.478000&apikey=${API_KEY}&units=metric`;
           
           const request = axios.get(URL)
           const response = await request;
        
           setWeather(response.data.weather[0]);
           setTemperature(response.data.main);
           setWind(response.data.wind);
           setData(response.data);
        }
        const weatherForecast = async () =>{
            const API_KEY = '1266751b2faa16b328461cfc57e7f4d8';
            const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=51.441643&lon=5.478000&apikey=${API_KEY}&units=metric`;
               
               const request = axios.get(URL)
               const response = await request;
            
               setForecast(response.data.list[0].main);
            }
    //Ako iskash da go testvash polvai toq key - a0584d716e9b992064ad01890816506d
        return (
    <div>
        <Container>
            <Navigation/>
            <Context.Provider value={{currentWeather, weather, temperature, wind, data}}>
             <Main/>
             <Prognosis></Prognosis>
             </Context.Provider>
            <News/>
        </Container>
      <Footer/>
    </div>
    );
}

export default App;