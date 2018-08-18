import React, { Component } from 'react';
import axios from 'axios';
import MovieDetails from './MovieDetails';
import NewMovieForm from './NewMovieForm';
import EditMovieForm from './EditMovieForm';

class MoviesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: [],
            editingMovieId: null,
        }
        this.addNewMovie = this.addNewMovie.bind(this)
        this.removeMovie = this.removeMovie.bind(this)
        this.editingMovie = this.editingMovie.bind(this)
        this.editMovie = this.editMovie.bind(this)
    }

    componentDidMount() {
        axios.get('api/v1/movies.json')
        .then(response => {
            this.setState({
                movies: response.data
            })
        })
        .catch(error => console.log(error))
    }

    addNewMovie(title, description) {
        var config = {
            headers: {}
        }
        if (localStorage.getItem("jwt") !== undefined) {
            config['headers']['Authorization'] = 'Bearer ' + localStorage.getItem("jwt")
        }
        let data = { movie: {title, description}}
        axios.post( 'api/v1/movies', data, config)
        .then(response => {
            const movies = [ ...this.state.movies, response.data ]
            this.setState({movies})
        })
        .catch(error => {
            console.log(error)
        })
    }

    removeMovie(id) {
        var config = {
            headers: {}
        }
        if (localStorage.getItem("jwt") !== undefined) {
            config['headers']['Authorization'] = 'Bearer ' + localStorage.getItem("jwt")
        }
        axios({
            method: 'delete',
            url: 'api/v1/movies/'+id,
            //params: {'id': id},
            headers: {'Authorization': 'Bearer ' + localStorage.getItem("jwt")}
          })
          

        //axios.delete( {baseURL: '/api/v1/movies/' + id, config } )
        .then(response => {
            const movies = this.state.movies.filter(
                movie => movie.id !== id
            )
            this.setState({movies})
        })
        .catch(error => console.log(error))
    }

    editingMovie(id) {
        this.setState({
            editingMovieId: id
        })
    }

    editMovie(id, title, description) {
        var config = {
            headers: {}
        }
        if (localStorage.getItem("jwt") !== undefined) {
            config['headers']['Authorization'] = 'Bearer ' + localStorage.getItem("jwt")
        }
        axios.put( 'api/v1/movies/' + id, { 
            movie: {
                title, 
                description
            }
        }, config)
        .then(response => {
            const movies = this.state.movies.map(movie => (movie.id === id ? Object.assign({}, movie, {id, title, description}) : movie))

            this.setState(() => ({
                movies,
                editingMovieId: null
            }))
        })
        .catch(error => console.log(error));
    }   
    
    render() {
        return (
            <div className="container">
            <h3 className="text-center">Movies</h3>
            <hr/>
                <div class="row">
                {this.state.movies.map( (movie) => {
                    if ( this.state.editingMovieId === movie.id ) {
                        return (<EditMovieForm 
                                    movie={movie}
                                    key={movie.id}
                                    editMovie={this.editMovie}
                        />)
                    } else {
                        let user = this.props.currentUser
                        let allow_editing = parseInt(movie.user_id) === parseInt(user.id)
                        return (<MovieDetails 
                                    movie={movie} 
                                    key={movie.id} 
                                    onRemoveMovie={this.removeMovie}
                                    editingMovie={this.editingMovie}
                                    allow_editing={allow_editing}
                        />)
                    }
                })}
                {this.props.currentUser.id !== 0 &&
                <NewMovieForm onNewMovie={this.addNewMovie} />
                }
                </div>
            </div>
        )
    }
}

export default MoviesList;