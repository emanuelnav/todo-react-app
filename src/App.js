import React from 'react'
import { useTodos } from './js/useTodos';
import { CreateToDoButton } from './components/CreateToDoButton';
import { ToDoCounter } from './components/ToDoCounter';
import { ToDoItem } from './components/ToDoItem';
import { ToDoList } from './components/ToDoList';
import { ToDoSearch } from './components/ToDoSearch';
import { Modal } from './components/Modal';
import { ToDoForm } from './components/ToDoForm';
import { Footer } from './components/Footer';

function App() {

  const {
    searchValue,
    setSearchValue,
    openModal,
    setOpenModal,
    completedTasks,
    totalTasks,
    tasksFiltered,
    toggleCompleteTask,
    deleteTask,
    addTask
  } = useTodos();

  return (
    <React.Fragment>
      <ToDoCounter
        completedTasks={completedTasks}
        totalTasks={totalTasks}/>

      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>

      <ToDoList
        tasksFiltered={tasksFiltered}
        render={task => (
          <ToDoItem
            key={task.name}
            title={task.name}
            completed={task.completed}
            onComplete={() => toggleCompleteTask(task.name)}
            onDelete={() => deleteTask(task.name)}
          />
        )}
      />

      {openModal && (
        <Modal>
          <ToDoForm
            setOpenModal={() => setOpenModal()}
            addTask={addTask}/>
        </Modal>
      )}

      <CreateToDoButton setOpenModal={setOpenModal}/>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
