import React, { useState, useEffect } from "react";
import AvatarComponent from "../components/AvatarComponent";
import BackButtonComponent from "../components/BackButtonComponent";
import EditProfileForm from "../components/EditProfileForm";

function EditProfile() {
  const [profileData, setProfileData] = useState({
    profileUrl: "",
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) return;

    const storedUser = JSON.parse(localStorage.getItem(`user_${loggedInUser}`));
    if (storedUser) {
      setProfileData({
        name: storedUser.name || "",
        email: storedUser.email || "",
        password: storedUser.password || "",
        profileUrl: storedUser.profileUrl || "",
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) return;
    
    const userData = {
      name: profileData.name,
      email: profileData.email,
      password: profileData.password,
      profileUrl: profileData.profileUrl,
    };

    localStorage.setItem(`user_${loggedInUser}`, JSON.stringify(userData));

    setProfileData((prevData) => ({
      ...prevData,
      password: "",
    }));

    alert("Profile updated successfully!");
  };

  return (
    <div className="bg-[#0d0714] min-h-screen text-white flex justify-center items-center p-4">
      <div className="bg-[#1D1825] p-6 lg:p-12 rounded-2xl w-full max-w-lg flex flex-col space-y-6 relative">
        <BackButtonComponent />
        <AvatarComponent profileUrl={profileData.profileUrl} />
        <EditProfileForm
          profileData={profileData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default EditProfile;
