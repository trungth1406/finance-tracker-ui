import {createStore} from "redux";
import rootReducer from "../reducer/root";


export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}