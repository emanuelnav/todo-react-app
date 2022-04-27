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
            placeholder = "Insert a new task..."/>

            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick = {onCancel}
                >
                    <i class="bi bi-x-circle"></i>
                </button>

                <button
                    className="TodoForm-button TodoForm-button-add"
                    type= "submit"
                >
                    <i class="bi bi-plus-circle"></i>
                </button>
            </div>
        </form>
    );
}

export { ToDoForm };