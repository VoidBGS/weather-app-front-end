import axios from 'axios'
const URL = process.env.REACT_APP_API_URL;

  export async function getArticles(){
        const data  = await axios.get(URL + "/api/NewsArticles").then(function (response){
            return response;
          }).catch(function (error) {
            console.error(error);
            return [];
          })
         return data;
     }