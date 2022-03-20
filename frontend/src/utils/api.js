
class Api {
    constructor(config) {
        this._baseUrl = config.baseUrl;
    }

    _getResponseData(res){
        if (!res.ok) {
            return Promise.reject(`error: ${res.status}`); 
        }
        return res.json();
    }

    getEvents() {
        return fetch(`${this._baseUrl}/events`, {
            method: 'GET'
        })
        .then(res => {
            return this._getResponseData(res)
        })
    };
    
}

const api = new Api({
    baseUrl: "http://localhost:8000"
});

export default api;
