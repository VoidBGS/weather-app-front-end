import React, {useState} from 'react'
import {Form} from 'react-bootstrap'

const ArticleEditPicture = ({article}) =>{
    const [formPicture, setFormPicture] = useState(article.articlePicture)
    const HandleInputChange = (e) =>{
        setFormPicture(e.target.value);
      }

    return(
        <Form.Group>
        <Form.Label className="edit-form-content" >Upload An Image</Form.Label>
        <Form.Control required size="lg" name="image" type="text" onChange={HandleInputChange} value={formPicture} placeholder="The link to your article's image" minLength="10"/>
        </Form.Group>
    )
}

export default ArticleEditPicture