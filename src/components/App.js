import React, { useState } from 'react'
import Navigation from './Navigation'
import Main from './Main'
import Prognosis from './Prognosis'
import { weatherData } from '../api/weatherData'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'


const App = () => {

    const [weather, setWeather] = useState({});
    const setAPI = async ()=>{
    const data = await weatherData();
    setWeather(data);
    }

    //setAPI metoda ne bachka kakto trqbva, kato go viknesh i startirash servera request i response neshtata
    //stavat prekaleno mnogo I tiq ot OpenWeatherAPI mi blokirat key-a za nqkvo vreme
    //Zatova mislq da produlja s dizaina puk API-a ste go mislq nakraq.
    //Ako iskash da go testvash polvai toq key - a0584d716e9b992064ad01890816506d
        return (
    <Container>
         <Navigation/>
          <Main/>
          <Prognosis/>
    </Container>
    );
}

export default App;