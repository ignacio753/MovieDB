import React, { Component } from 'react';
import MovieDetails from './MovieDetails';
import NewMovieForm from './NewMovieForm';
import EditMovieForm from './EditMovieForm';
import { getMovieData, addMovie, removeMovie, editMovie } from '../utils/movie-api';

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
        getMovieData().then((movies) => {
            this.setState({ movies });
        });
    }

    addNewMovie(title, description) {
        addMovie(title, description).then((newMovie) => {
            const movies = [ ...this.state.movies, newMovie ]
            this.setState({movies})
        })
    }

    removeMovie(id) {
        removeMovie(id).then((id) => {
            const movies = this.state.movies.filter(
                movie => movie.id !== id
            )
            this.setState({movies})
        })
    }

    editingMovie(id) {
        this.setState({
            editingMovieId: id
        })
    }

    editMovie(id, title, description) {
        editMovie(id, title, description).then((id) => {
            const movies = this.state.movies.map(movie => (movie.id === id ? Object.assign({}, movie, {id, title, description}) : movie))

            this.setState(() => ({
                movies,
                editingMovieId: null
            }))
        })
    }   
    
    render() {
        // Loop the movies list, if a movie is in editing mode, display the edit form
        return (
            <div className="container">
            <h3 className="text-center">Movies</h3>
            <hr/>
                <div className="row">
                {this.props.currentUser.id !== 0 &&
                    <NewMovieForm onNewMovie={this.addNewMovie} />
                }
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
                </div>
            </div>
        )
    }
}

export default MoviesList;