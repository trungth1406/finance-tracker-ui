import axios from "axios";

export const BaseHandler = {
    baseUrl: 'http://127.0.0.1:8000',
    getRequest: function (uri, fnCallback) {
        return axios.get(this.baseUrl + uri).then((response) => {
            if (fnCallback === undefined) {
                return response.data
            } else {
                return fnCallback(response.data)
            }
        });
    },
    postRequest: function (uri, body, fnCallback) {
        return axios.post(this.baseUrl + uri, body).then(response => {
            if (fnCallback === undefined) {
                return response.data
            } else {
                return fnCallback(response)
            }
        })
    }
}


export const AccountHandler = function (fnCallback, id) {
    this.accURI = '/api/resources/' + id + '/related-accounts/'
    this.callBackName = fnCallback
    return {
        dispatchRequest: this.getRequest.bind(this, this.accURI, this.callBackName)
    }
}

export const AccountResourceHandler = function (fnCallback) {
    this.accResourceUrl = '/api/resources/'
    this.callBackName = fnCallback
    return {
        dispatchRequest: this.getRequest.bind(this, this.accResourceUrl, this.callBackName)
    }
}