import React, {useState}  from 'react'
import {Form} from 'react-bootstrap'

const ArticleEditTitle = ({article}) =>{
    //DEPRECIATED
    const [formTitle, setFormTitle] = useState(article.articleTitle)
    const HandleInputChange = (e) =>{
        setFormTitle(e.target.value);
      }

    return(
        <Form.Group>
        <Form.Label className="edit-form-title pt-4">Title</Form.Label>
        <Form.Control required size="lg" name="title" type="text" value={formTitle} onChange={HandleInputChange} placeholder="The title of your article" minLength="10" maxLength="70"/>
        <Form.Control.Feedback type="invalid" className="feedback">Title is Empty!</Form.Control.Feedback>
        </Form.Group>
    )
}

export default ArticleEditTitle