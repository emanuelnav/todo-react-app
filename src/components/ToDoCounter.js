import React from 'react'
import '../css/ToDoCounter.css'

function ToDoCounter({completedTasks, totalTasks}) {
    return (
        <h2 className="todoCounter">You completed {completedTasks}/{totalTasks} tasks</h2>
    );
}

export { ToDoCounter };