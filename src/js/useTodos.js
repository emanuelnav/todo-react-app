import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
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

    const addTask = (name) => {
        const newTaskList = [...tasksList]
        newTaskList.push({
            name: name,
            completed: false,
        });
        saveTasksList(newTaskList);
    };

    const deleteTask = (name) => {
        const newTaskList = tasksList.filter(task => task.name !== name)
        saveTasksList(newTaskList);
    };

    return (
        {
            searchValue,
            setSearchValue,
            openModal,
            setOpenModal,
            tasksList,
            saveTasksList,
            completedTasks,
            totalTasks,
            tasksFiltered,
            toggleCompleteTask,
            deleteTask,
            addTask
        }
    )
}

export { useTodos };