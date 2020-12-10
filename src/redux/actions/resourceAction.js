import {GetResourcesRequest} from "../../services/accountservices";
import {BaseRequest} from "../../services/baseService";


export const ResourceAction = {
    addResource: function addNewResource(resourceData) {
        return {type: "ADD_NEW_RESOURCE", resourceData}
    },
    fetchResources: function fetchResourceData(resourceData) {
        return {type: "GET_RESOURCE", resourceData}
    }
}

export function getResourceData() {
    return function (dispatch) {
        return GetResourcesRequest.call(BaseRequest).sendGetRequest().then(data => {
            dispatch(ResourceAction.fetchResources(data));
        })
    }
}


