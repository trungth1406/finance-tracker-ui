import {GetResourcesRequest} from "./accountservices";

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
