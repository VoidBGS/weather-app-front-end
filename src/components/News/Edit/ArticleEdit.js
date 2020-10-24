import React, {useState, useEffect} from 'react'
import './ArticleEdit.css'
import axios from 'axios'
import ArticleEditForm from './ArticleEditForm'

const ArticleEdit = ({match}) =>{
    useEffect(() => {
        getArticle(match.params.id);
        }, []);

    const [article, setArticle] = useState({})
   
    const URL = `https://localhost:44356/api/NewsArticles/${match.params.id}`

    const getArticle = async (id) =>{
        const response = await axios.get(URL)
        .then(
          response => setArticle(response.data)
        ).catch(function (error) {
          console.error(error);
        })
       }

    return(
        <>
          {article && (<ArticleEditForm article={article}/>)}
        </>
    )
}

export default ArticleEdit