import {combineReducers} from 'redux';
import sourceReducer from './sourceReducer'
import sourceFormReducer from "./sourceFormReducer";
import accountFormReducer from "./accountFormReducer";

const rootReducer = combineReducers({
    sourceReducer,
    sourceFormReducer,
    accountFormReducer
})

export default rootReducer