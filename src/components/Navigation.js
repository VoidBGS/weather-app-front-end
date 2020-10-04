import React from 'react'
import './App.css'
import {Link, BrowserRouter as Router} from "react-router-dom";

const Navigation = () =>{
    return(
     <div>
         <div className="navigation-flexbox">
             <h2 className="logo">Weather<br/>Hoven</h2>
         </div>
         <ul>
           <li><Link to="/">Weather</Link></li>
           <li><Link to="/News">News</Link></li>
           <li><Link to="/Photos">Photos</Link></li>
           <li><Link to="/Forum">Forum</Link></li>
         </ul>
     </div>
    )
}

export default Navigation;