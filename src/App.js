// import './App.css';
import React from 'react'
import { CreateToDoButton } from './components/CreateToDoButton';
import { ToDoCounter } from './components/ToDoCounter';
import { ToDoItem } from './components/ToDoItem';
import { ToDoList } from './components/ToDoList';
import { ToDoSearch } from './components/ToDoSearch';

function App() {
  const localStoreTasks = localStorage.getItem('TASKSLIST_V1');
  let parsedTasks;
  if (!localStoreTasks) {
    localStorage.setItem('TASKSLIST_V1', JSON.stringify([]))
    parsedTasks = [];
  } else {
    parsedTasks = JSON.parse(localStoreTasks);
  }

  const [searchValue, setSearchValue] = React.useState('');
  const [tasksList, setTasksList] = React.useState(parsedTasks);
  const completedTasks = tasksList.filter(task => task.completed).length;
  const totalTasks = tasksList.length;

  let tasksFiltered = [];

  if (!searchValue.length > 0) {
    tasksFiltered = tasksList;
  } else {
    tasksFiltered = tasksList.filter(task => {
      const taskName = task.name.toLowerCase();
      const filter = searchValue.toLowerCase().trim();
      return taskName.includes(filter);
    });
  }

  const saveTasksList = (tasksList) => {
    localStorage.setItem('TASKSLIST_V1', JSON.stringify(tasksList))
    setTasksList(tasksList)
  };

  const toggleCompleteTask = (name) => {
    const taskIndex = tasksList.findIndex(task => task.name === name);
    const newTaskList = [...tasksList];
    newTaskList[taskIndex].completed = !newTaskList[taskIndex].completed;
    saveTasksList(newTaskList);
  };

  const deleteTask = (name) => {
    const newTaskList = tasksList.filter(task => task.name !== name)
    saveTasksList(newTaskList);
  };

  return (
    <React.Fragment>
      <ToDoCounter completedTasks={completedTasks}
                   totalTasks={totalTasks}/>
      <ToDoSearch searchValue={searchValue}
                  setSearchValue={setSearchValue}/>
      <ToDoList>
        { tasksFiltered.map(task =>
          <ToDoItem key={task.name}
                    title={task.name}
                    completed={task.completed}
                    onComplete={() => toggleCompleteTask(task.name)}
                    onDelete={() => deleteTask(task.name)}/>
        )}
      </ToDoList>
      <CreateToDoButton/>
    </React.Fragment>
  );
}

export default App;
