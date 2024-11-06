import React from "react";
import Profile from "../components/Profile";
import AddTaskForm from "../components/AddTaskForm";
import TaskToDo from "../components/TaskToDo";
import DoneTask from "../components/DoneTask";

function Task() {
  const tasks = [
    { id: 1, text: "To study React fundamentals", done: false },
    { id: 2, text: "To complete the project", done: false },
    { id: 3, text: "To read documentation", done: false },
    { id: 4, text: "To practice coding", done: false },
  ];

  const completedTasks = [{ id: 1, text: "To study React fundamentals" }];

  

  return (
    <div className="bg-[#0d0714] text-white flex min-h-screen items-center justify-center p-4 overflow-x-hidden">
      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
        <Profile />

        {/* Task Section */}
        <div className="bg-[#1D1825] p-6 lg:p-16 rounded-2xl w-full lg:w-[34rem] flex flex-col justify-between h-[86vh]">
          {/* Add Task Form */}
          <AddTaskForm />

          {/* Tasks to do */}
          <TaskToDo tasks={tasks} />

          {/* Done Tasks */}
          <DoneTask completedTasks={completedTasks} />
        </div>
      </div>
    </div>
  );  
}

export default Task;
