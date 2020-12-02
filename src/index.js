import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import 'bulma/css/bulma.css'
import 'bulma/css/bulma.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {AccountResourceHandler, BaseHandler} from "./services/accountservices";
import configureStore from "./redux/stores/resourceStore";
import {Provider, useStore} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./redux/reducer/root";




const data = AccountResourceHandler.call(BaseHandler).dispatchRequest();
const store = data

ReactDOM.render(
    <div className="container">
        <Provider store={data}>
            <App/>
        </Provider>
    </div>, document.getElementById('root')
);
