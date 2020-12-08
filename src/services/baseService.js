import axios from "axios";

export const BaseRequest = {
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