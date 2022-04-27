import React from 'react'
import '../css/ToDoCounter.css'
import { ToDoContext } from '../js/ToDoContext';

function ToDoCounter() {
    const {completedTasks, totalTasks} = React.useContext(ToDoContext);
    return (
        <h2 className="todoCounter">You completed {completedTasks}/{totalTasks} tasks</h2>
    );
}

export { ToDoCounter };