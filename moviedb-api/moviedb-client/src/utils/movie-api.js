import axios from 'axios';
import * as constants from './constants';
import { getAuthConfig } from './auth'

// CRUD API for movies data

function getMovieData() {
  const url = constants.BASE_URL;
  return axios.get(url)
  .then(response => response.data)
  .catch(error => console.log(error));
}

function addMovie(title, description) {
  const url = constants.BASE_URL;
  let data = { movie: { title, description }};
  let config = getAuthConfig();
  
  return axios.post(url, data, config)
  .then(response => response.data)
  .catch(error => console.log(error))
}

function removeMovie(id) {
  const url = constants.BASE_URL+id;
  let config = getAuthConfig();
  return axios({
      method: constants.DELETE,
      url: url,
      headers: config[constants.HEADERS]
  }).then(response => id)
  .catch(error => console.log(error));
}

function editMovie(id, title, description) {
  const url = constants.BASE_URL + id;
  let data = { movie: { title, description } }
  let config = getAuthConfig();
  
  return axios.put(url, data, config)
  .then(response => id)
  .catch(error => console.log(error));
}

export { getMovieData, addMovie, removeMovie, editMovie };