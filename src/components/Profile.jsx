// Profile.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEdit,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userName, setUserName] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [showSignOutConfirm, setShowSignOutConfirm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) return;
  
    // Load user data using the key user_${loggedInUser}
    const storedUser = JSON.parse(localStorage.getItem(`user_${loggedInUser}`));
    if (storedUser) {
      setUserName(storedUser.name);
      setProfileUrl(storedUser.profileUrl || ""); // Set profile URL if available
    }
  }, []);
  

  const handleSignOut = () => {
    setShowSignOutConfirm(true);
  };

  const confirmSignOut = () => {
    setShowSignOutConfirm(false);
    navigate("/");
  };

  const cancelSignOut = () => {
    setShowSignOutConfirm(false);
  };

  const handleEditProfile = () => {
    navigate("/editprofile");
  };

  return (
    <div className="bg-[#1D1825] p-6 lg:p-16 rounded-2xl flex flex-col items-center space-y-6 justify-center relative">
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

      <div className="text-center">
        <p className="text-lg">
          Welcome Back, <span className="font-bold">{userName || "User"}</span>
        </p>
      </div>
      <button
        onClick={handleEditProfile}
        className="bg-[#2c2c2c] text-white py-2 px-3 rounded-lg flex items-center space-x-2 hover:bg-[#4C4C4C]"
      >
        <FontAwesomeIcon icon={faEdit} />
        <span>Edit Profile</span>
      </button>
      <button
        onClick={handleSignOut}
        className="bg-[#C00F0C] text-white py-2 px-5 rounded-lg flex items-center space-x-2 hover:bg-[#EC221F]"
      >
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span>Sign Out</span>
      </button>

      {/* Sign-Out Confirmation Modal */}
      {showSignOutConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="bg-[#1D1825] rounded-lg p-6 w-80 text-center">
            <h3 className="text-lg font-semibold text-white mb-4">
              Confirm Sign Out
            </h3>
            <p className="text-gray-300 mb-6">
              Are you sure you want to sign out?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmSignOut}
                className="bg-[#C00F0C] text-white px-4 py-2 rounded hover:bg-[#EC221F]"
              >
                Confirm
              </button>
              <button
                onClick={cancelSignOut}
                className="bg-[#2c2c2c] text-white px-4 py-2 rounded hover:bg-[#4C4C4C]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
