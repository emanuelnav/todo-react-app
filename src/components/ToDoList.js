import React from 'react';
import '../css/ToDoList.css';

function ToDoList(props) {
    return (
        <section>
            <ul>
                {props.tasksFiltered.map(props.render)}
            </ul>
        </section>
    );
}

export { ToDoList };