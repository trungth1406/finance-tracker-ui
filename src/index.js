import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import 'bulma/css/bulma.css'
import 'bulma/css/bulma.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

ReactDOM.render(
    <div className="container">
        <App/>
    </div>, document.getElementById('root')
);
