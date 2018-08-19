import axios from 'axios';
import * as constants from './constants';

function getAuthConfig() {
    var config = {
        headers: {}
    }
    if (localStorage.getItem(constants.JWT) !== undefined) {
        config[constants.HEADERS][constants.AUTHORIZATION] = constants.BEARER + localStorage.getItem(constants.JWT)
    }
    
    return config;
}

function userLogin(email, password) {
    let data = {
        auth: {
          email: email,
          password: password
        }
    } 
    return axios.post(constants.USER_TOKEN_URL, data)
    .then(response => {
        localStorage.setItem(constants.JWT, response.data.jwt)
    })
    .then(()=> getCurrentUser())
    .catch(error => console.log(error))
}

function getCurrentUser() {
    let config = getAuthConfig();
    return axios.get(constants.CURRENT_USER_URL, config)
    .then(response => response.data)
}

export { getAuthConfig, userLogin };