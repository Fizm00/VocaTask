// src/components/TaskToDo.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

function TaskToDo({ tasks, onDone, onDelete }) {
    return (
      <div className="flex-grow mt-3 max-h-[50vh] overflow-auto">
        <p className="mb-4 text-md">Tasks to do - {tasks.length}</p>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-[#0d0b1e] p-5 rounded-lg flex justify-between items-center w-full border border-[#9E78CF]"
            >
              <span className="text-[#9E78CF] text-sm">{task.text}</span>
              <div className="flex space-x-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-[#9E78CF] hover:text-[#523C72]"
                  onClick={() => onDone(task.id)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-[#9E78CF] hover:text-[#523C72]"
                  onClick={() => onDelete(task.id, false)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default TaskToDo;
