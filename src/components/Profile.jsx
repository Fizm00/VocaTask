import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEdit, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Profile() {
  const navigate = useNavigate(); // Inisialisasi hook untuk navigasi

  const handleSignOut = () => {
    // Di sini kamu bisa menambahkan logika untuk menghapus sesi pengguna, misalnya menghapus token
    navigate("/"); // Arahkan ke halaman login
  };

  const handleEditProfile = () => {
    navigate("/editprofile"); // Arahkan ke halaman Edit Profile
  };

  return (
    <div className="bg-[#1D1825] p-6 lg:p-16 rounded-2xl flex flex-col items-center space-y-6 justify-center">
      <div className="bg-[#9E78CF] rounded-full w-24 h-24 flex items-center justify-center">
        <span className="text-4xl text-[#0d0714]">
          <FontAwesomeIcon icon={faUser} />
        </span>
      </div>
      <div className="text-center">
        <p className="text-lg">
          Welcome Back, <span className="font-bold">Firza!</span>
        </p>
      </div>
      <button 
        onClick={handleEditProfile} 
        className="bg-[#2c2c2c] text-white py-2 px-3 rounded-lg flex items-center space-x-2">
        <FontAwesomeIcon icon={faEdit} />
        <span>Edit Profile</span>
      </button>
      <button
        onClick={handleSignOut}
        className="bg-[#C00F0C] text-white py-2 px-5 rounded-lg flex items-center space-x-2"
      >
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span>Sign Out</span>
      </button>
    </div>
  );
}

export default Profile;
