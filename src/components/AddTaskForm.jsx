import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddTaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      console.log("Adding task:", taskText);
      onAddTask(taskText);
      setTaskText("");
    } else {
      console.log("No task text entered.");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 mb-12 mt-[-1rem]">
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="w-full sm:p-2.5 border border-[#9E78CF] rounded-xl bg-[#0d0b1e] text-gray-400 placeholder:text-[#777777] focus:border-[#9E78CF] focus:outline-none focus:ring-1 focus:ring-[#9E78CF] text-sm"
      />
      <button onClick={handleAddTask} className="bg-[#9E78CF] text-white py-2 px-3 rounded-lg hover:bg-[#0d0b1e]">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default AddTaskForm;
