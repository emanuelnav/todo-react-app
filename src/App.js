import React from 'react'
import { CreateToDoButton } from './components/CreateToDoButton';
import { ToDoCounter } from './components/ToDoCounter';
import { ToDoItem } from './components/ToDoItem';
import { ToDoList } from './components/ToDoList';
import { ToDoSearch } from './components/ToDoSearch';
import { Modal } from './components/Modal';
import { ToDoForm } from './components/ToDoForm';
import { Footer } from './components/Footer';
import { ToDoContext } from './js/ToDoContext';

function App() {
  const {
    tasksFiltered,
    toggleCompleteTask,
    deleteTask,
    openModal,
  } = React.useContext(ToDoContext);

  return (
    <React.Fragment>
      <ToDoCounter/>
      <ToDoSearch/>
        <ToDoList>
          { tasksFiltered.map(task =>
            <ToDoItem key={task.name}
                      title={task.name}
                      completed={task.completed}
                      onComplete={() => toggleCompleteTask(task.name)}
                      onDelete={() => deleteTask(task.name)}/>
          )}
        </ToDoList>

      {openModal && (
        <Modal>
          <ToDoForm/>
        </Modal>
      )}
      <CreateToDoButton/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
