import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

function DoneTask({ completedTasks }) {
  return (
    <div className="flex-grow mt-12 max-h-[50vh] overflow-y-auto">
      <p className="mb-4 text-md">Done - {completedTasks.length}</p>
      <div className="space-y-4">
        {completedTasks.map((task) => (
          <div
            key={task.id}
            className="bg-[#0d0b1e] p-5 rounded-lg flex justify-between items-center w-full"
          >
            <span className="text-green-500 line-through text-sm">
              {task.text}
            </span>
            <div className="flex space-x-4">
              <FontAwesomeIcon icon={faCheck} className="text-[#9E78CF]" />
              <FontAwesomeIcon icon={faTrash} className="text-[#9E78CF]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoneTask;

