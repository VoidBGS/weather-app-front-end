import React from 'react'
import Weather from './Weather/Weather'
import News from './News/News'
import Forum from './Forum/Forum'
import Photos from './Photos/Photos'
import Footer from './Footer'
import CreateRoutes from '../routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

const App = () => {

    //Ako iskash da go testvash polvai toq key - a0584d716e9b992064ad01890816506d
        return (
   
             <>
                <Container>
                <CreateRoutes/>
                </Container>
                <Footer/>
             </>

    );
}

export default App;