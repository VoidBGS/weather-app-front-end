import React from 'react'
import Main from './Main'
import News from './News'
import Prognosis from './Prognosis'
import "./Weather.css";

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

    //Ako iskash da go testvash polvai toq key - a0584d716e9b992064ad01890816506d
        return (
    <div>
             <Main/>
             <Prognosis/>
            <News/>
    </div>
    );
}

export default App;