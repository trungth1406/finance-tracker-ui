import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducer/root";
import React from 'react'
import thunk from 'redux-thunk'
import accountFormReducer from "../reducer/accountFormReducer";


export const store = createStore(rootReducer, applyMiddleware(thunk));
export const accountStore = createStore(accountFormReducer, applyMiddleware(thunk));


