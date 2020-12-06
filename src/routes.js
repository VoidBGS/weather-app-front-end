import React from 'react'
import Weather from './components/Weather/Weather'
import News from './components/News/News'
import Maps from './components/Maps/Maps'
import Photos from './components/Photos/Photos'
import NewsArticleForm from './components/News/Form/NewsArticleForm'
import Navigation from './components/Navigation'
import Article from './components/News/Article/Article'
import ArticleEdit from './components/News/Edit/ArticleEdit'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import UploadPicture from './components/Photos/Form/UploadPicture'
import Signout from './Signout'
import ErrorPage from './ErrorPage'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const CreateRoutes = () =>{
    return(
        <Router>
            <Navigation />
            <Switch>
                {/*General Links*/}
                <Route path="/" exact component={Weather} />
                <Route path="/News" exact component={News} />
                <Route path="/Photos" exact component={Photos} />
                <Route path="/Weather-Maps" exact component={Maps} />

                {/*Authentication Links*/}
                <Route path="/Register" exact component={Register} />
                <Route path="/Login" exact component={Login} />
                <Route path="/Signout" exact component={Signout} />

                {/*News Articles*/}
                <Route path="/News/Post" exact component={NewsArticleForm} />
                <Route path="/News/Article/:id/Edit" exact component={ArticleEdit} />
                <Route path="/News/Article/:id" component={Article} />

                 {/*Pictures*/}
                 <Route path="/Photos/Upload" exact component={UploadPicture} />

                {/*Error Handling*/}
                <Route component={ErrorPage} />
            </Switch>
        </Router>
    )
    };

export default CreateRoutes;