import React, {useState, useEffect} from "react"
import { Row } from 'react-bootstrap'
import PrognosisDay1 from './PrognosisDay1'
import PrognosisDay2 from './PrognosisDay2'
import PrognosisDay3 from './PrognosisDay3'
import axios from 'axios';

const Prognosis = () =>{

   const [forecast, setData] = useState({});
   const [city, setCity] = useState({})
 
   //Every 8 points equal a new day so - 8, 16, 24 a0584d716e9b992064ad01890816506d 
   const weatherForecast = async () =>{
      const API_KEY = '1266751b2faa16b328461cfc57e7f4d8';
      const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=51.441643&lon=5.478000&apikey=${API_KEY}&units=metric`;
         
         const request = axios.get(URL)
         const response = await request;
         
         setData(response.data);
      }
      useEffect(() => {
         weatherForecast()
       }, []);

    return(
       <div>
          <Row className="weather-text"><p>3-Day Prognosis</p></Row>
          <div className="pb-3">
             <Row className="weather-box-wrapper pt-4 mb-5">
                <PrognosisDay1 data={forecast} />
                <PrognosisDay2 data={forecast} />
                <PrognosisDay3 data={forecast} />
             </Row>
          </div>
          <hr className="linebreak"></hr>
       </div>
    )
}

export default Prognosis;