import React, {useEffect, useState} from 'react'
import './NewsArticleForm.css'
import {Row, Form, Button} from 'react-bootstrap'

const NewsForm = () => {
    const [validated, setValidated] = useState(false);
    const [isLoading, setLoading] = useState(false);

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
      }

      useEffect(() => {
        if (isLoading) {
          simulateNetworkRequest().then(() => {
            setLoading(false);
          });
        }
      }, [isLoading]);

      const handleClick = () => setLoading(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            return new Promise((resolve) => setTimeout(resolve, 2000));
        }

        setValidated(true);
    };

        return (
            <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Label className="news-form-title pt-4">Title</Form.Label>
        <Form.Control required size="lg" type="text" placeholder="The title of your article" minLength="10"/>
        <Form.Control.Feedback type="invalid" className="feedback">Title is Empty!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label className="news-form-content" >Article Content</Form.Label>
        <Form.Control required as="textarea" rows="10" placeholder="Article Content is placed here..." minLength="25"/>
        <Form.Control.Feedback type="invalid" className="feedback">The Article Content Needs to be at least 50 Characters long!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
        <Form.File id="news-picture" label="Article Picture" className="news-form-picture" />
        </Form.Group>
        <Button variant="warning" size="lg" type="submit" disabled={isLoading} onClick={!isLoading ? handleClick : null} className="news-form-button m-2" block> {isLoading ? 'Loading…' : 'Post Article'}</Button>
        </Form>
        </>
        )
}

export default NewsForm;