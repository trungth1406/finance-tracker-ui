import {AccountResourceHandler} from "./accountservices";

export const CreateResource = function (body, fnCallBack) {
    this.body = body
    this.fnCallBack = fnCallBack;
    return {
        sendPost: this.postRequest.bind(this, this.accResourceUrl, this.body, this.fnCallBack)
    }

}

