import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducer/root";
import React from 'react'
import {useDispatch} from "react-redux";
import thunk from 'redux-thunk'


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store

