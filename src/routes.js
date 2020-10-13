import React from 'react'
import Weather from './components/Weather/Weather'
import News from './components/News/News'
import Forum from './components/Forum/Forum'
import Photos from './components/Photos/Photos'
import Navigation from './components/Navigation'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const CreateRoutes = () =>{
    return(
    <Router>
    <Navigation/>
    <Switch>
    <Route path="/" exact component={Weather}/>
    <Route path="/News" exact component={News}/>
    <Route path="/Photos" exact component={Photos}/>
    <Route path="/Forum" exact component={Forum}/>
    </Switch>
    </Router>
    )
    };

export default CreateRoutes;