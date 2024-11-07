import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DoneTask({ completedTasks, onDelete }) {
    return (
      <div className="flex-grow mt-12 max-h-[50vh] overflow-y-auto">
        <p className="mb-4 text-md">Done - {completedTasks.length}</p>
        <div className="space-y-4">
          {completedTasks.map((task) => (
            <div
              key={task.id}
              className="bg-[#0d0b1e] p-5 rounded-lg flex justify-between items-center w-full border border-[#9E78CF]"
            >
              <span className="text-green-500 line-through text-sm">{task.text}</span>
              <div className="flex space-x-4">
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-[#9E78CF] hover:text-[#523C72]"
                  onClick={() => onDelete(task.id, true)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }  

export default DoneTask;
