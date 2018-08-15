import React, { Component } from 'react';
//const MovieDetails = ({movie, onRemoveMovie=f=>f, editingMovie=f=>f}) =>

class MovieDetails extends React.Component {
    constructor(props) {
        super(props)
        this.onRemoveMovie = this.props.onRemoveMovie.bind(this)
        this.editingMovie = this.props.editingMovie.bind(this)
    }

    render() {
        let movie = this.props.movie
        return(
            <div className="col-sm-6" key={movie.id}>
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title"><span className="btn">{ movie.title }</span></h3>
                    </div>
                    <div className="panel-body">
                        <p> { movie.description } </p>
                        {this.props.allow_editing &&
                        <div>
                            <button className="log btn btn-primary btn-sm mr-5" onClick={() => this.props.editingMovie(movie.id)}>Edit</button>
                            <button className="log btn btn-danger btn-sm" onClick={() => this.props.onRemoveMovie(movie.id)}>Delete</button>
                        </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieDetails;
