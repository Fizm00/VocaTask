import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function BackButtonComponent() {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate("/task")} 
      className="flex items-center space-x-3 text-[#ffffff] text-lg absolute top-4 left-10 font-semibold hover:text-[#9E78CF]"
      aria-label="Back to Task Page"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>Edit Profile</span>
    </button>
  );
}

export default BackButtonComponent;
