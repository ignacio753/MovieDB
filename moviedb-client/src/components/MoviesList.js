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
            editingMovieId: null   
        }
        this.addNewMovie = this.addNewMovie.bind(this)
        this.removeMovie = this.removeMovie.bind(this)
        this.editingMovie = this.editingMovie.bind(this)
        this.editMovie = this.editMovie.bind(this)
    }

    componentDidMount() {
        axios.get('api/v1/movies.json')
        .then(response => {
            console.log(response)
            this.setState({
                movies: response.data
            })
        })
        .catch(error => console.log(error))
    }

    addNewMovie(title, description) {
        axios.post( 'api/v1/movies', { movie: {title, description} })
        .then(response => {
            console.log(response)
            const movies = [ ...this.state.movies, response.data ]
            this.setState({movies})
        })
        .catch(error => {
            console.log(error)
        })
    }

    removeMovie(id) {
        axios.delete( '/api/v1/movies/' + id )
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
        axios.put( '/api/v1/movies/' + id, { 
            movie: {
                title, 
                description
            } 
        })
        .then(response => {
            console.log(response);
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
            <div className="lists-container">
                {this.state.movies.map( movie => {
                    if ( this.state.editingMovieId === movie.id ) {
                        return (<EditMovieForm 
                                    movie={movie}
                                    key={movie.id}
                                    editMovie={this.editMovie}
                        />)
                    } else {
                        return (<MovieDetails 
                                    movie={movie} 
                                    key={movie.id} 
                                    onRemoveMovie={this.removeMovie}
                                    editingMovie={this.editingMovie}
                        />)
                    }
                })}
                <NewMovieForm onNewMovie={this.addNewMovie} />
            </div>
        )
    }
}

export default MoviesList;