import React from 'react';
import '../css/ToDoForm.css';

function ToDoForm({setOpenModal, addTask}) {
    const [nameValue, setNameValue] = React.useState('');
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
                    <i className="bi bi-x-lg"></i>
                </button>

                <button
                    className="todoForm-button todoForm-button-add"
                    type= "submit"
                >
                    <i className="bi bi-plus-lg"></i>
                </button>
            </div>
        </form>
    );
}

export { ToDoForm };