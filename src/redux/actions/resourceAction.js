import {AccountResourceHandler, BaseHandler} from "../../services/accountservices";

export function addNewResource(resourceData) {
    return {type: "ADD_NEW_RESOURCE", resourceData}
}

function fetchResourceData(resourceData) {
    return {type: "GET_RESOURCE", resourceData}
}


export function getResourceData() {
    return function (dispatch) {
        return AccountResourceHandler.call(BaseHandler).dispatchRequest().then(data => {
            dispatch(fetchResourceData(data));
        })
    }
}


