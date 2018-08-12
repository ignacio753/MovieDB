import React, { Component } from 'react';
class EditMovieForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.movie.id,
            title: this.props.movie.title,
            description: this.props.movie.description
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const { id, title, description } = this.state;
        this.props.editMovie(id, title, description);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input  name="title"
                    type="text"
                    placeholder="Title..."
                    value={this.state.title}
                    onChange={this.handleChange} />
            <input  name="description"
                    type="text"
                    placeholder="Description..."
                    value={this.state.description}
                    onChange={this.handleChange} />
            <button>Update Movie</button>
        </form>
        )
    }
}
export default EditMovieForm;