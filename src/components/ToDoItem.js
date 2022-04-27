import React from 'react';
import '../css/ToDoItem.css';

function ToDoItem(props) {
    return (
      <li className="todoItem">
        <button type="button"
                className={`icon ${props.completed && 'icon-check--active'}`}
                onClick={props.onComplete}>
          <i className={`bi ${props.completed ? 'bi-check-square' : 'bi-square'}`}></i>
        </button>

        <p className={`todoItem-p ${props.completed && 'todoItem-p--complete'}`}>
          {props.title}
        </p>

      <span
        className="icon icon-delete"
        onClick={props.onDelete}>
        <i className="bi bi-trash3"></i>
      </span>
    </li>
    );
}

export { ToDoItem };