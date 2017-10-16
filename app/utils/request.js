import 'whatwg-fetch';
import Promise from 'bluebird';
import { logError } from './errorLog';

export function callApi(url, options) {

    return httpRequest(url, options)
}

export function httpRequest(url, options) {

    try {

        return new Promise((resolve, reject) => {

            fetch(url, options)
                .then((response) => {  

                    if (response.status == 200 || response.status == 201) {

                        parseJSON(response).then((data) => {

                            let result = { completed: true, response, data };
                            resolve(result);

                        });

                    } else if (response.status == 401) {

                        window.location = "/";
                        let result = { completed: false, response, data: null };

                        resolve(result);

                    } else {

                        let result = { completed: false, response };
                        resolve(response);
                    }
                })
                .catch((err, a) => {

                    let result = { completed: false, error: err };
                    resolve(result);

                });
        });
    }
    catch (e) {

        logError(e);
    }
}

function parseJSON(response) {

    return new Promise((resolve) => {

        response.json().then((data) => {

            resolve(data);

        });
    })
}

function checkStatus(response) {

    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;

    throw error;
}