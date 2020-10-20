import axios from 'axios'
const URL = "https://localhost:44356/api/NewsArticles"  

  export async function getArticles(){
        const data  = await axios.get(URL).then(function (response){
            return response;
          }).catch(function (error) {
            console.error(error);
          })
         return data;
     }