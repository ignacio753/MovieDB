import axios from 'axios';

export { getMovieData };

function getMovieData() {
  const url = '/api/v1/movies';
  return axios.get(url).then(response => response.data);
}