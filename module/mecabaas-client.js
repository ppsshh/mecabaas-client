'use strict';

const axios = require('axios');
const promise = require('bluebird');
const apiBase = 'http://mecab.nkjmkzk.net/api';

module.exports = class mecabaasClient {

    static parse(text){
        let request = axios.create({
            headers: {'Content-Type': 'application/json'}
        });

        return new promise(function(resolve, reject){
            request.get(apiBase + '/parse?text=' + encodeURIComponent(text))
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    }

    static wakachi(text){
        let request = axios.create({
            headers: {'Content-Type': 'application/json'}
        });

        return new promise(function(resolve, reject){
            request.get(apiBase + '/wakachi?text=' + encodeURIComponent(text))
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        });
    }

};
