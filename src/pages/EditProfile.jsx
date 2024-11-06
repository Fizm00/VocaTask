import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; 

function EditProfile() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/task");
  };

  return (
    <div className="bg-[#0d0714] min-h-screen text-white flex justify-center items-center p-4">
      <div className="bg-[#1D1825] p-6 lg:p-12 rounded-2xl w-full max-w-lg flex flex-col space-y-6 relative">
        
        {/* Tombol Kembali */}
        <button 
          onClick={handleBack} 
          className="flex items-center space-x-3 text-[#ffffff] text-lg absolute top-4 left-10 font-semibold"
          aria-label="Back to Task Page"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Edit Profile</span>
        </button>

        {/* Avatar */}
        <div className="flex flex-col items-center space-y-2">
          <div className="bg-[#9E78CF] rounded-full w-24 h-24 flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} className="text-4xl text-[#0d0714]" />
          </div>
        </div>

        {/* Form Input */}
        <form className="flex flex-col space-y-8">
          <div>
            <label className="text-sm mb-3 block">Profile URL</label>
            <input
              type="url"
              className="w-full p-3 bg-[#1D1825] rounded-lg text-white border border-[#9E78CF] focus:outline-none focus:border-[#9E78CF]"
              placeholder="https://your-profile-url.com"
            />
          </div>
          <div>
            <label className="text-sm mb-3 block">Name</label>
            <input
              type="text"
              className="w-full p-3 bg-[#1D1825] rounded-lg text-white border border-[#9E78CF] focus:outline-none focus:border-[#9E78CF]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="text-sm mb-3 block">Email</label>
            <input
              type="email"
              className="w-full p-3 bg-[#1D1825] rounded-lg text-white border border-[#9E78CF] focus:outline-none focus:border-[#9E78CF]"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="text-sm mb-3 block">Password</label>
            <input
              type="password"
              className="w-full p-3 bg-[#1D1825] rounded-lg text-white border border-[#9E78CF] focus:outline-none focus:border-[#9E78CF]"
              placeholder="Your Password"
            />
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="bg-[#523C72] text-white py-3 px-6 rounded-lg mt-4 font-semibold border border-[#D1B5F5]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
