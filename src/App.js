// import './App.css';
import React from 'react'
import { CreateToDoButton } from './components/CreateToDoButton';
import { ToDoCounter } from './components/ToDoCounter';
import { ToDoItem } from './components/ToDoItem';
import { ToDoList } from './components/ToDoList';
import { ToDoSearch } from './components/ToDoSearch';

const todos = [
  {name: "Learn React", completed: false},
  {name: "Go to the gym", completed: false},
  {name: "Read a book", completed: false},
]
function App() {
  return (
    <React.Fragment>
      <ToDoCounter/>
      <ToDoSearch/>
      <ToDoList>
        { todos.map( todo =>
          <ToDoItem key={todo.name} title={todo.name} completed={todo.completed}/>
        )}
      </ToDoList>
      <CreateToDoButton/>
    </React.Fragment>
  );
}

export default App;
