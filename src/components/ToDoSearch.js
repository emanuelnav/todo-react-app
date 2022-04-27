import React from 'react';
import '../css/ToDoSearch.css';
import { ToDoContext } from '../js/ToDoContext';

function ToDoSearch() {
    const {searchValue, setSearchValue} = React.useContext(ToDoContext);

    const onSearchValueChange = event => {
        setSearchValue(event.target.value);
    }

    return (
        <input className="TodoSearch"
               placeholder="Search a task"
               value={searchValue}
               onChange={onSearchValueChange}/>
    );
}

export { ToDoSearch };