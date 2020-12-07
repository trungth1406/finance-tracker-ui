import {combineReducers} from 'redux';
import sourceReducer from './sourceReducer'
import sourceFormReducer from "./sourceFormReducer";

const rootReducer = combineReducers({
    sourceReducer,
    sourceFormReducer
})

export default rootReducer