// import './App.css';
import React from 'react'
import { CreateToDoButton } from './components/CreateToDoButton';
import { ToDoCounter } from './components/ToDoCounter';
import { ToDoItem } from './components/ToDoItem';
import { ToDoList } from './components/ToDoList';
import { ToDoSearch } from './components/ToDoSearch';
import { Modal } from './components/Modal';

function useLocalStorage(itemName) {
  const localStoreTasks = localStorage.getItem(itemName);
  let parsedTasks;
  if (!localStoreTasks) {
    localStorage.setItem(itemName, JSON.stringify([]))
    parsedTasks = [];
  } else {
    parsedTasks = JSON.parse(localStoreTasks);
  }

  const [tasksList, setTasksList] = React.useState(parsedTasks);

  const saveTasksList = (tasksList) => {
    localStorage.setItem(itemName, JSON.stringify(tasksList))
    setTasksList(tasksList)
  };

  return [tasksList, saveTasksList];

};

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  const [tasksList, saveTasksList] = useLocalStorage('TASKSLIST_V1');
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

      <Modal>
        <p>BUENAS</p>
      </Modal>

      <CreateToDoButton/>
    </React.Fragment>
  );
}

export default App;
