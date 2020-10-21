import React from 'react'
import './App.css'
import {Link} from "react-router-dom";

const Navigation = () =>{
    return(
     <div>
         <div className="navigation-flexbox">
             <h2 className="logo">Weather<br/>Hoven</h2>
         </div>
         <ul className="navigation-bar">
           <li className="navigation-bar-list"><Link to="/">Weather</Link></li>
           <li className="navigation-bar-list"><Link to="/News">News</Link></li>
           <li className="navigation-bar-list"><Link to="/Photos">Photos</Link></li>
           <li className="navigation-bar-list"><Link to="/Forum"><strike>Forum</strike></Link></li>
         </ul>
     </div>
    )
}

export default Navigation;