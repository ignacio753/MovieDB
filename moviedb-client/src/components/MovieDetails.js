import React from 'react';
const MovieDetails = ({movie, onRemoveMovie=f=>f, editingMovie=f=>f}) =>
    <div className="single-list" key={movie.id}>
        <h4>{movie.title}</h4>
        <p>{movie.description}</p>
        <button onClick={() => onRemoveMovie(movie.id)}>Delete</button>\
        <button onClick={() => editingMovie(movie.id)}>Edit</button>
    </div>
export default MovieDetails;
