import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'

export default function DeleteButton({id}) {
    const URL = process.env.REACT_APP_API_URL

    const [isLoading, setLoading] = useState(false);

    const handleSubmit = (event) =>{
        if (window.confirm("Are you sure you want to delete this article?")) {
        setLoading(true);
        event.preventDefault();
        console.log(id)
        axios.delete(URL + `/api/Pictures/${id}`).then(() =>{
            setLoading(false);
            window.location.replace('/Photos')
        }).catch((error) => {
            setLoading(false);
            console.log(error);
        })
    }
    }

    return (
        <Button variant="danger" size="lg" type="submit" disabled={isLoading} onClick={handleSubmit} className="my-3" block> {isLoading ? 'Loading…' : 'Delete Article'}</Button>
    )
}
