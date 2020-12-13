import axios from "axios";

export const BaseRequest = {
    baseUrl: 'http://127.0.0.1:8000/api/',
    config: {
        headers: {'Content-Type': 'application/json'}
    },
    handleResponse: function (response) {
        if (this.fnCallBack === undefined) {
            return response.data
        } else {
            return this.fnCallBack(response.data)
        }
    },
    getRequest: function () {
        return axios.get(this.baseUrl + this.uri).then(this.handleResponse.bind(this));
    },
    postRequest: function (body) {
        return axios.post(this.baseUrl + this.uri, this.body, this.config).then(this.handleResponse.bind(this));
    },
    deleteRequest: function () {
        return axios.delete(this.baseUrl + this.uri, this.config).then(this.handleResponse.bind(this))
    }
}