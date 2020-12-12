export const GetResourcesRequest = function (fnCallBack) {
    this.uri = 'resources'
    this.fnCallBack = fnCallBack
    return {
        sendGetRequest: this.getRequest.bind(this, this.uri, this.fnCallBack)
    }
}


export const GetResourceDetailRequest = function (id, fnCallBack) {
    this.uri = `resources/${id}`
    this.fnCallBack = fnCallBack
    return {
        sendGetRequest: this.getRequest.bind(this, this.uri, this.fnCallBack)
    }
}

export const GetRelatedAccountsRequest = function (id, fnCallback) {
    this.uri = 'resources/' + id + '/related_accounts'
    this.fnCallBack = fnCallback
    return {
        sendGetAccountRequest: this.getRequest.bind(this, this.uri, this.fnCallBack)
    }
}


