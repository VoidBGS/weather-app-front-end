import React, {useState}  from 'react'
import {Form} from 'react-bootstrap'

const ArticleEditContent = ({article}) =>{
    //DEPRECIATED
    const [formContent, setFormContent] = useState(article.articleContent)
    const HandleInputChange = (e) =>{
        setFormContent(e.target.value);
      }
    
    return(
        <Form.Group>
        <Form.Label className="edit-form-content" >Article Content</Form.Label>
        <Form.Control required as="textarea" name="content" rows="10" value={formContent} onChange={HandleInputChange} placeholder="Your article's content is placed here..." minLength="25"/>
        <Form.Control.Feedback type="invalid" className="feedback">The Article Content Needs to be at least 50 Characters long!</Form.Control.Feedback>
        </Form.Group>
    )
}

export default ArticleEditContent