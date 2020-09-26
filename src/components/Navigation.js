import React from 'react';
import './App.css';

const Navigation = () =>{
    return(
     <div>
         <div>
             <h2 className="logo">Weather<br/>Hoven</h2>
         </div>
         <ul>
           <li><a href="#weather">Weather</a></li>
           <li><a href="#news">News</a></li>
           <li><a href="#photos">Photos</a></li>
           <li><a href="#forum">Forum</a></li>
         </ul>
     </div>
    )
}

export default Navigation;