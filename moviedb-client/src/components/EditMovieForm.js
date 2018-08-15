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
                <div className="col-sm-6">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <h3 className="panel-title"><span className="btn">
                            <input  name="title"
                                    type="text"
                                    placeholder="Title..."
                                    value={this.state.title}
                                    onChange={this.handleChange} /></span></h3>
                        </div>
                        <div className="panel-body">
                            <p> <textarea   name="description"
                                            rows="2"
                                            cols="70"
                                            type="text"
                                            placeholder="Description..."
                                            value={this.state.description}
                                            onChange={this.handleChange} /> </p>
                            <div>
                                <button className="log btn btn-primary btn-sm mr-5">Update</button>
                                <button className="log btn btn-secondary btn-sm mr-5">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
export default EditMovieForm;