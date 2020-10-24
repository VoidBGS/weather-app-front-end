import React from 'react'
import Weather from './components/Weather/Weather'
import News from './components/News/News'
import Forum from './components/Forum/Forum'
import Photos from './components/Photos/Photos'
import NewsArticleForm from './components/News/Form/NewsArticleForm'
import Navigation from './components/Navigation'
import Article from './components/News/Article/Article'
import ArticleEdit from './components/News/Edit/ArticleEdit'
import ErrorPage from './ErrorPage'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const CreateRoutes = () =>{
    return(
    <Router>
    <Navigation/>
    <Switch>
    {/*General Links*/}
    <Route path="/" exact component={Weather}/>
    <Route path="/News" exact component={News}/>
    <Route path="/Photos" exact component={Photos}/>
    <Route path="/Forum" exact component={Forum}/>

    {/*News Articles*/}
    <Route path="/News/Post" exact component={NewsArticleForm}/>
    <Route path="/News/Article/:id/Edit" exact component={ArticleEdit}/>
    <Route path="/News/Article/:id" exact component={Article}/>

    {/*Error Handling*/}
    <Route component={ErrorPage} />
    </Switch>
    </Router>
    )
    };

export default CreateRoutes;