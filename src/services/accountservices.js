export const GetResourcesRequest = function (fnCallback) {
    this.uri = 'resources'
    this.callBackName = fnCallback
    return {
        sendGetRequest: this.getRequest.bind(this, this.uri, this.callBackName)
    }
}


export const GetResourceRequest = function (id, fnCallback) {
    this.uri = `resources/${id}`
    this.callBackName = fnCallback
    return {
        sendGetRequest: this.getRequest.bind(this, this.uri, this.callBackName)
    }
}

export const GetRelatedAccountRequest = function (id, fnCallback) {
    this.uri = 'resources/' + id + '/related-accounts'
    this.fnCallBack = fnCallback === undefined ? undefined : fnCallback
    return {
        sendGetAccountRequest: this.getRequest.bind(this, this.uri, this.fnCallBack)
    }
}


