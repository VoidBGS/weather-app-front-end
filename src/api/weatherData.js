import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '57f5b8e03524516c712854170083e9ad';

export const weatherData = async () => {
    const { data } = await axios.get(URL, {
        params: {
            id: 2756252,
            APPID: API_KEY,
        }
    });

    return data;
}