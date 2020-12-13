export const CreateNewResource = function (body, fnCallBack) {
    this.uri = 'resources'
    this.body = body
    this.fnCallBack = fnCallBack;
    return {
        sendPost: this.postRequest.bind(this, this.accResourceUrl, this.body, this.fnCallBack)
    }

}

export const CreateNewRelatedAccount = function (id, body, fnCallBack) {
    this.uri = 'resources/' + id + '/related_accounts'
    this.body = body;
    this.fnCallBack = fnCallBack;
    return {
        createNewAccount: this.postRequest.bind(this, this.uri, this.body, this.fnCallBack)
    }
}

export const DeleteRelatedAccount = function ({resourceId, accountId}, fnCallBack) {
    this.uri = 'resources/' + resourceId + '/related_accounts?account_id=' + accountId
    this.fnCallBack = fnCallBack
    return {
        deleteAccount: this.deleteRequest.bind(this, this.uri, this.fnCallBack)
    }
}
