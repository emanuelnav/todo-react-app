import React from 'react'
import '../css/ToDoItem.css'

function ToDoItem(props) {
    const onComplete = () => {
        console.log(props.title);
      };
      const onDelete = () => {
        alert('Borraste el todo ' + props.title);
      };

    return (
      <li className="TodoItem">
        <button type="button"
                className={`Icon Icon-check btn ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}>
          <i className="bi bi-check-square"></i>
        </button>

        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.title}
        </p>

      <span
        className="Icon Icon-delete"
        onClick={onDelete}>
        X
      </span>
    </li>
    );
}

export { ToDoItem };