import React from 'react';
import '../css/ToDoSearch.css';

function ToDoSearch() {
    const onSearchValueChange = event => {
        console.log(event.target.value);
    }

    return (
        <input className="TodoSearch"
               placeholder="Insert a task"
               onChange={ onSearchValueChange }/>
    );
}

export { ToDoSearch };