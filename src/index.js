import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import 'bulma/css/bulma.css'
import 'bulma/css/bulma.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {Provider} from "react-redux";
import {getResourceData} from "./redux/actions/resourceAction";
import {store} from "./redux/stores/resourceStore";

const resourceStore = store
resourceStore.dispatch(getResourceData())

ReactDOM.render(
    <div className="container">
        <Provider store={resourceStore}>
            <App/>
        </Provider>
    </div>, document.getElementById('root')
);


