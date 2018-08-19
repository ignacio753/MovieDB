import axios from 'axios';
import * as constants from './constants';

// Checks if the JWT token exists in the local storage
// Creates a Auth Header for subsequent requests
function getAuthConfig() {
    var config = {
        headers: {}
    }
    if (localStorage.getItem(constants.JWT) !== undefined) {
        config[constants.HEADERS][constants.AUTHORIZATION] = constants.BEARER + localStorage.getItem(constants.JWT)
    }
    
    return config;
}

// Sends and auth request
// Once a JWT token is obtained the current user info is requested
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

// Returns the user data (email and user id) for the current JWT token
function getCurrentUser() {
    let config = getAuthConfig();
    return axios.get(constants.CURRENT_USER_URL, config)
    .then(response => response.data)
}

export { getAuthConfig, userLogin };