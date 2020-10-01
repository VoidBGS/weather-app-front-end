import React, { useState } from 'react'
import Navigation from './Navigation'
import Main from './Main'
import News from './News'
import Footer from './Footer'
import Prognosis from './Prognosis'

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

const App = () => {

    //Ako iskash da go testvash polvai toq key - a0584d716e9b992064ad01890816506d
        return (
    <div>
        <Container>
            <Navigation/>
             <Main/>
             <Prognosis/>
            <News/>
        </Container>
        <Footer/>
    </div>
    );
}

export default App;