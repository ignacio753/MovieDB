import React from 'react';

const NewMovieForm = ({onNewMovie = f => f}) => {
    let title, description
    const submit = e => {
        e.preventDefault()
        onNewMovie(title.value, description.value)
        title.value = ''
        description.value = ''
        title.focus()
    }
    

    return (
        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>New movie</h2>
            <form onSubmit={submit}>
                <div class="col-lg-4 col-lg-offset-4">
                <input  ref={input => title = input}
                        type="text"
                        placeholder="Title..." required
                        className="form-control mr-sm-2 ml-2 log" />
                <textarea   ref={input => description = input}
                            type="text"
                            placeholder="Description..." required
                            className="form-control mr-sm-2 ml-2 log"
                            rows="2" />
                <button class="btn btn-success log">Add</button>
                </div>
            </form>
          </div>
        </div>
    )
}

export default NewMovieForm;