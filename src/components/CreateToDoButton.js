import React from 'react'
import '../css/CreateToDoButton.css'
import { ToDoContext } from '../js/ToDoContext';

function CreateToDoButton() {
    const {setOpenModal} = React.useContext(ToDoContext);

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