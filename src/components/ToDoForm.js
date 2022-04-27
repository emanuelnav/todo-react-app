import React from 'react';
import '../css/ToDoForm.css';
import { ToDoContext } from '../js/ToDoContext';

function ToDoForm() {
    const [nameValue, setNameValue] = React.useState('');
    const {setOpenModal, addTask} = React.useContext(ToDoContext);
    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(nameValue);
        setOpenModal(false)
    };

    const onChange = (event) => {
        setNameValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit} >
            <label>Add a new task</label>

            <textarea
            value = {nameValue}
            onChange = {onChange}
            placeholder = "Insert a new task..."
            required/>

            <div className="todoForm-buttonContainer">
                <button
                    type="button"
                    className="todoForm-button todoForm-button-cancel"
                    onClick = {onCancel}
                >
                    <i class="bi bi-x-lg"></i>
                </button>

                <button
                    className="todoForm-button todoForm-button-add"
                    type= "submit"
                >
                    <i class="bi bi-plus-lg"></i>
                </button>
            </div>
        </form>
    );
}

export { ToDoForm };