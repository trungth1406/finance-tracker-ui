export const CreateNewResource = function (body, fnCallBack) {
    this.body = body
    this.fnCallBack = fnCallBack;
    return {
        sendPost: this.postRequest.bind(this, this.accResourceUrl, this.body, this.fnCallBack)
    }

}

export const CreateNewRelatedAccount = function (body, fnCallBack) {
    this.body = body;
    this.fnCallBack = fnCallBack;
    return {
        createNewAccount: this.postRequest.bind(this, this.relatedAccURL, this.body, this.fnCallBack)
    }
}

export const DeleteRelatedAccount = function ({resourceId, accountId}, fnCallBack) {
    this.uri = 'resources/' + resourceId + '/related-accounts/?account_id=' + accountId
    this.fnCallBack = fnCallBack
    return {
        deleteAccount: this.deleteRequest.bind(this, this.uri, this.fnCallBack)
    }
}
