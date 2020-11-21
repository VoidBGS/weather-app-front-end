import React, {useEffect} from 'react'
import {Row, Alert, Spinner} from 'react-bootstrap'

export default function Signout() {
    useEffect(() =>{
        sessionStorage.removeItem('Token');
        window.location.replace('http://localhost:3000/')
    }, [])

    return (
        <>
            <Alert variant="secondary" show={true} className="p-5">
                <Alert.Heading>
                    <b>Success!</b>
                </Alert.Heading>
                <Row className="pl-3">
                    <p>You have signed out successfully. Goodbye!</p>
                    <p><i>Redirecting</i></p>
                    <Spinner animation="border" size="sm" role="status" className="mt-2 ml-2">
                    </Spinner>
                </Row>
            </Alert>
        </>
    )
}
