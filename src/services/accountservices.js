import axios from "axios";

export const BaseHandler = {
    baseUrl: 'http://127.0.0.1:8000',
    apiRequest: function (uri, fnCallback) {
        return axios.get(this.baseUrl + uri).then((response) => {
            return fnCallback(response.data)
        });
    }
}


export const AccountHandler = function (fnCallback) {
    this.accURI = '/api/accounts/'
    this.callBackName = fnCallback
    return {
        req: this.apiRequest.bind(this, this.accURI, this.callBackName)
    }
}

export const AccountResourceHandler = function (fnCallback) {
    this.accResourceUrl = '/api/resources/'
    this.callBackName = fnCallback
    return {
        req: this.apiRequest.bind(this, this.accResourceUrl, this.callBackName)
    }
}