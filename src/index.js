import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import 'bulma/css/bulma.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/css/fontawesome.css'

ReactDOM.render(
    <div className="container">
        <App/>
    </div>, document.getElementById('root')
);
