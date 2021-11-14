import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <>
            <div className="container col-sm-10 card my-3">
                <div className="card-body">
                    <button className="btn btn-sm btn-danger float-end" onClick={() => { onDelete(todo) }}>Delete</button>
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.desc}</p>
                </div>
            </div>
        </>
    )
}
