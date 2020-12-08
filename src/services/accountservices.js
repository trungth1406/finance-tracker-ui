export const GetResourcesRequest = function (fnCallback) {
    this.accResourceUrl = '/api/resources/'
    this.callBackName = fnCallback
    return {
        dispatchRequest: this.getRequest.bind(this, this.accResourceUrl, this.callBackName)
    }
}

export const GetRelatedAccountRequest = function (fnCallback, id) {
    this.relatedAccURL = '/api/resources/' + id + '/related-accounts/'
    this.callBackName = fnCallback
    return {
        dispatchRequest: this.getRequest.bind(this, this.relatedAccURL, this.callBackName)
    }
}


