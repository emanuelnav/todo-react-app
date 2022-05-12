import React from 'react'
import '../css/CreateToDoButton.css'

function CreateToDoButton({setOpenModal}) {

    const openModal = () => {
        setOpenModal(true);
    }
    return (
        <button className="createTodoButton"
                onClick={openModal}>
            <i className="bi bi-plus-lg"></i>
        </button>
    );
}

export { CreateToDoButton };