import React, { useState, useEffect } from "react";
import Profile from "../components/Profile";
import AddTaskForm from "../components/AddTaskForm";
import TaskToDo from "../components/TaskToDo";
import DoneTask from "../components/DoneTask";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const loadFromLocalStorage = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) return { storedTasks: [], storedCompletedTasks: [] };

    const storedTasks = JSON.parse(localStorage.getItem(`${loggedInUser}_tasks`)) || [];
    const storedCompletedTasks = JSON.parse(localStorage.getItem(`${loggedInUser}_completedTasks`)) || [];
    return { storedTasks, storedCompletedTasks };
  };

  const saveToLocalStorage = (tasks, completedTasks) => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) return;

    localStorage.setItem(`${loggedInUser}_tasks`, JSON.stringify(tasks));
    localStorage.setItem(`${loggedInUser}_completedTasks`, JSON.stringify(completedTasks));
  };

  const saveToLocalStorageDebounced = () => {
    clearTimeout(window.saveTimeout);
    window.saveTimeout = setTimeout(() => {
      saveToLocalStorage(tasks, completedTasks);
    }, 500);
  };

  useEffect(() => {
    const { storedTasks, storedCompletedTasks } = loadFromLocalStorage();
    setTasks(storedTasks);
    setCompletedTasks(storedCompletedTasks);
  }, []);

  useEffect(() => {
    saveToLocalStorageDebounced();
  }, [tasks, completedTasks]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text: newTask, done: false },
    ]);
  };

  const markTaskAsDone = (taskId) => {
    const taskToComplete = tasks.find((task) => task.id === taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setCompletedTasks((prevCompletedTasks) => [
      ...prevCompletedTasks,
      { ...taskToComplete, done: true },
    ]);
  };

  const deleteTask = (taskId, isCompleted) => {
    if (isCompleted) {
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks.filter((task) => task.id !== taskId)
      );
    } else {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }
  };

  return (
    <div className="bg-[#0d0714] text-white flex min-h-screen items-center justify-center p-4 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
        <Profile /> {/* Display Profile with userName */}
        <div className="bg-[#1D1825] p-6 lg:p-16 rounded-2xl w-full lg:w-[34rem] flex flex-col justify-between h-[86vh]">
          <AddTaskForm onAddTask={addTask} />
          <TaskToDo tasks={tasks} onDone={markTaskAsDone} onDelete={deleteTask} />
          <DoneTask completedTasks={completedTasks} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default Task;
