import React, {useState, useEffect} from "react"
import { Row } from 'react-bootstrap'
import PrognosisDay1 from './PrognosisDay1'
import PrognosisDay2 from './PrognosisDay2'
import PrognosisDay3 from './PrognosisDay3'
import axios from 'axios';

const Prognosis = () =>{

   const [forecast, setData] = useState({});
 
   const weatherForecast = async () =>{
      const API_KEY = process.env.REACT_APP_OPENWEATHER_KEY
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