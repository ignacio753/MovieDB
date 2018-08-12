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
        <form onSubmit={submit}>
            <input  ref={input => title = input}
                    type="text"
                    placeholder="Title..." required />
            <input  ref={input => description = input}
                    type="text"
                    placeholder="Description..." required />
            <button>Add Movie</button>
        </form>
    )
}

export default NewMovieForm;