import React, {useState, useEffect}  from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'
import ErrorPage from '../../../ErrorPage'


function ArticleEditContent({article}){
    const [validated, setValidated] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [ID, setID] = useState(3)
    const [formTitle, setFormTitle] = useState(article.articleTitle)
    const [formContent, setFormContent] = useState(article.articleContent)
    const [formPicture, setFormPicture] = useState(article.articlePicture)
    const [formPictureCredit, setFormPictureCredit] = useState(article.articlePictureCredit)
    const URL = `https://localhost:44356/api/NewsArticles/${ID}`

    useEffect(() => {
        setFormTitle(article.articleTitle)
        setFormContent(article.articleContent)
        setFormPicture(article.articlePicture)
        setFormPictureCredit(article.articlePictureCredit)
        setID(article.id)
        }, [article.id, article.articleTitle, article.articleContent, article.articlePicture, article.articlePictureCredit]);

    const HandleInputChange = (e) =>{
        if(e.target.name == "title"){
            setFormTitle(e.target.value)
        }
        if(e.target.name == "content"){
            setFormContent(e.target.value)
        }
        if(e.target.name == "image"){
            setFormPicture(e.target.value)
        }
        if(e.target.name == "credit"){
          setFormPictureCredit(e.target.value)
      }
      }

      const handleClick = () => setLoading(true);
      
      const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setLoading(false)
        }
        else{
          event.preventDefault();
          let data = JSON.stringify({
            ID: ID,
            ArticleTitle: formTitle,
            ArticleContent: formContent,
            ArticlePicture: formPicture,
            ArticlePictureCredit: formPictureCredit,
        });
          const res = await axios.put(URL, data, {
            headers: {
            'Content-Type': 'application/json'
            }
        }
        ).then(function (response){
            console.log(response);
            setLoading(false)
            window.location.replace(`http://localhost:3000/News/Article/${ID}`)
          }).catch(function (error) {
            console.error(error);
          })
          console.log(res);
        }
        setValidated(true);
    };
            

    return(
        <>
        {article.id === undefined ? <ErrorPage/> :
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Label className="edit-form-title pt-4">Title</Form.Label>
            <Form.Control required size="lg" name="title" type="text" value={formTitle || ""} onChange={HandleInputChange} placeholder="The title of your article" minLength="10" maxLength="70"/>
            <Form.Control.Feedback type="invalid" className="feedback">Title is Empty!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
            <Form.Label className="edit-form-content" >Article Content</Form.Label>
            <Form.Control required as="textarea" name="content" rows="10" value={formContent || ""} onChange={HandleInputChange} placeholder="Your article's content is placed here..." minLength="25"/>
            <Form.Control.Feedback type="invalid" className="feedback">The Article Content Needs to be at least 50 Characters long!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
            <Form.Label className="edit-form-content" >Upload An Image</Form.Label>
            <Form.Control required size="lg" name="image" type="text" value={formPicture || ""}  onChange={HandleInputChange} placeholder="The link to your article's image" minLength="10"/>
            </Form.Group>
            <Form.Group>
            <Form.Label className="edit-form-content" >Image Credit</Form.Label>
            <Form.Control required size="lg" name="credit" type="text" value={formPictureCredit || ""}  onChange={HandleInputChange} placeholder="The link to your article's image" minLength="10"/>
            </Form.Group>
            <Button variant="warning" size="md" type="submit" disabled={isLoading} onClick={!isLoading ? handleClick : null} className="my-2" block> {isLoading ? 'Loading…' : 'Save Changes'}</Button>
            </Form>}

            </>
    )

}

export default ArticleEditContent
