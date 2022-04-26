import React from 'react'
import '../css/ToDoItem.css'

function ToDoItem(props) {
    return (
      <li className="TodoItem">
        <button type="button"
                className={`Icon btn ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}>
          <i className={`bi ${props.completed ? 'bi-check-square' : 'bi-square'}`}></i>
        </button>

        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.title}
        </p>

      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}>
        <i className="bi bi-trash3"></i>
      </span>
    </li>
    );
}

export { ToDoItem };