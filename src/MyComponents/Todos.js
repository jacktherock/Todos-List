import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <hr />
            <h3 className="my-3 container alert alert-success text-center">Todos List</h3>
            {props.todos.length === 0 ? <h5 className="container alert alert-danger col-sm-8 text-center"><span className="fw-bold">No Todos To Display!</span>  Please Add New Todo!</h5> :
                props.todos.map((todo) => {
                    console.log(todo.sno);
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}
