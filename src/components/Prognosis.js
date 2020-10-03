import React, {useState} from "react"
import { Row } from 'react-bootstrap'
import PrognosisDay1 from './PrognosisDay1'
import PrognosisDay2 from './PrognosisDay2'
import PrognosisDay3 from './PrognosisDay3'
import axios from 'axios';

const Prognosis = () =>{

   const [day1, setDay1] = useState({});
   const [day2, setDay2] = useState({});
   const [day3, setDay3] = useState({});

   //Every 8 points equals new day so - 8, 16, 24
   const weatherForecast = async () =>{
      const API_KEY = '1266751b2faa16b328461cfc57e7f4d8';
      const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=51.441643&lon=5.478000&apikey=${API_KEY}&units=metric`;
         
         const request = axios.get(URL)
         const response = await request;
         
         setDay1(response.data.list[5]);
         setDay2(response.data.list[13]);
         setDay3(response.data.list[21]);
      }

    return(
         <div>
            <div className="weather-text"><p>3-Day Prognosis</p></div>
            <button onClick={weatherForecast}>Get Data</button>
            <div className="pb-3">
            <Row className="pt-4 mb-5">
               <PrognosisDay1 data={day1}/>
               <PrognosisDay2 data={day2}/>
               <PrognosisDay3 data={day3}/>
             </Row>
            </div>
            <hr className="linebreak"></hr>
         </div>
    )
}

export default Prognosis;