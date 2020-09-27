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

    const callApi = async () =>{
        const API_KEY = '57f5b8e03524516c712854170083e9ad';
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=51.441643&lon=5.478000&apikey=${API_KEY}&units=metric`;
           
           const request = axios.get(URL)
           const response = await request;
        
           setWeather(response.data.main);
        }

    //setAPI metoda ne bachka kakto trqbva, kato go viknesh i startirash servera request i response neshtata
    //stavat prekaleno mnogo I tiq ot OpenWeatherAPI mi blokirat key-a za nqkvo vreme
    //Zatova mislq da produlja s dizaina puk API-a ste go mislq nakraq.
    //Ako iskash da go testvash polvai toq key - a0584d716e9b992064ad01890816506d
        return (
    <div>
        <Container>
            <Navigation/>
            <Context.Provider value={{callApi, weather}}>
             <Main/>
             <Prognosis/>
             </Context.Provider>
            <News/>
        </Container>
      <Footer/>
    </div>
    );
}

export default App;