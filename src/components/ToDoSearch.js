import React from 'react';
import '../css/ToDoSearch.css';

function ToDoSearch({searchValue, setSearchValue}) {

    const onSearchValueChange = event => {
        setSearchValue(event.target.value);
    }

    return (
        <input className="todoSearch"
               placeholder="Search a task"
               value={searchValue}
               onChange={onSearchValueChange}/>
    );
}

export { ToDoSearch };