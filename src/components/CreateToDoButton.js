import React from 'react'
import '../css/CreateToDoButton.css'

function CreateToDoButton() {
    return (
        <button className="createTodoButton">
            <i className="bi bi-plus-lg"></i>
        </button>
    );
}

export { CreateToDoButton };