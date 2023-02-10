import React from 'react'

export default function MessageForm(props) {
    return (
        <form action="" className="my-3" onSubmit={props.handleFormSubmit}>
            <input type="text" name="task" className="form-control" placeholder='Enter New To-Do Task' />
            <input type="submit" value="Add To-Do" className="btn btn-danger w-100 mt-3" />
        </form>
    )
}