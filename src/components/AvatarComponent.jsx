import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function AvatarComponent({ profileUrl }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      {profileUrl ? (
        <img
          src={profileUrl}
          alt="Profile"
          className="bg-[#9E78CF] rounded-full w-24 h-24 object-cover"
        />
      ) : (
        <div className="bg-[#9E78CF] rounded-full w-24 h-24 flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="text-4xl text-[#0d0714]" />
        </div>
      )}
    </div>
  );
}

export default AvatarComponent;
