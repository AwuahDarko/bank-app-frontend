export class Network {
    // baseUrl = 'http://localhost:3000/';

    constructor(baseUrl = "http://localhost:3000/api") {
        this.baseUrl = baseUrl;
    }

    makeGETRequest(url) {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'source': 'frontend'
            },
        };

        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}${url}`, options)
                .then(async (res) => {
                    // console.log('res', res)
                    const json = await res.json();
                    const status = res.status;
                    const response = { status, data: json };
                    return response;

                })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        });
    }

    makePOSTRequest(url, body) {
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'source': 'frontend'
            },
            body: JSON.stringify(body),
        };


        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}${url}`, options)
                .then(async (res) => {
                    // console.log('res', res)
                    const json = await res.json();
                    const status = res.status;
                    const response = { status, data: json };
                    return response;
                })
                .then((data) => {
                    console.log('data', data);
                    resolve(data);
                })
                .catch((err) => {
                    console.log('error', err);
                    reject(err);
                });
        });
    }

    makePUTRequest(url, body) {
        const options = {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'source': 'frontend'
            },
            body: JSON.stringify(body),
        };

        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}${url}`, options)
                .then(async (res) => {
                    // console.log('res', res)
                    const json = await res.json();
                    const status = res.status;
                    const response = { status, data: json };
                    return response;
                })
                .then((data) => {
                    console.log('data', data);
                    resolve(data);
                })
                .catch((err) => {
                    console.log('error', err);
                    reject(err);
                });
        });
    }

    makeDELETERequest(url) {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'source': 'frontend'
            },
        };

        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}${url}`, options)
                .then(async (res) => {
                    // console.log('res', res)
                    const json = await res.json();
                    const status = res.status;
                    const response = { status, data: json };
                    return response;
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        });
    }
}


export const network = new Network();
