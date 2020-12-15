import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

const ArticleDeleteButton = ({ article }) => {
  const [isLoading, setLoading] = useState(false);
  const URL = `https://localhost:5001/api/NewsArticles/${article.id}`

  const handleClick = () => setLoading(true);

  const handleSubmit = async () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      let data = JSON.stringify({
        AuthorName: sessionStorage.getItem('Name'),
    });
    
      if (sessionStorage.getItem('Token') !== null) {
           await axios.delete(URL)
          .then(function (response) {
            console.log(response)
            setLoading(false)
            window.location.replace('/News')
          }).catch(function (error) {
            console.error(error);
          })
      }
    }
  }

  return (
    <>
      <Button variant="danger" size="lg" type="submit" disabled={isLoading} onClick={handleSubmit} className="my-3" block> {isLoading ? 'Loading…' : 'Delete Article'}</Button>
    </>
  )
}

export default ArticleDeleteButton