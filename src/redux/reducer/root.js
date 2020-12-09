import {combineReducers} from 'redux';
import resourceReducer from './sourceReducer'
import sourceFormReducer from "./sourceFormReducer";
import accountFormReducer from "./accountFormReducer";

const rootReducer = combineReducers({
    sourceReducer: resourceReducer,
    sourceFormReducer
})

export default rootReducer