import React, { Component } from 'react';
//const MovieDetails = ({movie, onRemoveMovie=f=>f, editingMovie=f=>f}) =>

class MovieDetails extends React.Component {
    constructor(props) {
        super(props)
        //this.onRemoveMovie = this.onRemoveMovie.bind(this)
        //this.editingMovie = this.editingMovie.bind(this)
    }

    render() {
        let movie = this.props.movie
        return(
            <div className="single-list" key={movie.id}>
                <h4>{movie.title}</h4>
                <p>{movie.description}</p>
                {this.props.allow_editing &&
                    <div>                
                        <button onClick={() => this.props.onRemoveMovie(movie.id)}>Delete</button>\
                        <button onClick={() => this.props.editingMovie(movie.id)}>Edit</button>
                    </div>
                }
            </div>
        )
    }
}
export default MovieDetails;
