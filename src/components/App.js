import React from 'react'
import Navigation from './Navigation'
import Weather from './Weather/Weather'
import News from './News/News'
import Forum from './Forum/Forum'
import Photos from './Photos/Photos'
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

const App = () => {

    //Ako iskash da go testvash polvai toq key - a0584d716e9b992064ad01890816506d
        return (
            <Router>
             <div>
                <Container>
                <Navigation/>
                <Switch>
                <Route path="/" exact component={Weather}/>
                <Route path="/News" component={News}/>
                <Route path="/Photos" component={Photos}/>
                <Route path="/Forum" component={Forum}/>
                </Switch>
                </Container>
                <Footer/>
             </div>
            </Router>
    );
}

export default App;