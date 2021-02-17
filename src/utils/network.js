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
        this.baseUrl = `${this.baseUrl}${url}`;
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl, options)
                .then((res) => {
                    console.log('res', res)
                    if (res.status < 500) {
                        return res.json();
                    } else {
                        reject('Internal server error occurred');
                        return res.text();
                    }
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
        this.baseUrl = `${this.baseUrl}${url}`;

        return new Promise((resolve, reject) => {
            fetch(this.baseUrl, options)
                .then((res) => {
                    console.log('res', res)
                    if (res.status < 500) {
                        return res.json();
                    } else {
                        reject('Internal server error occurred');
                        return res.text();
                    }
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
        this.baseUrl = `${this.baseUrl}${url}`;

        return new Promise((resolve, reject) => {
            fetch(this.baseUrl, options)
                .then((res) => {
                    console.log('res', res)
                    if (res.status < 500) {
                        return res.json();
                    } else {
                        reject('Internal server error occurred');
                        return res.text();
                    }
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
        this.baseUrl = `${this.baseUrl}${url}`;

        return new Promise((resolve, reject) => {
            fetch(this.baseUrl, options)
                .then((res) => {
                    console.log('res', res)
                    if (res.status < 500) {
                        return res.json();
                    } else {
                        reject('Internal server error occurred');
                        return res.text();
                    }
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
