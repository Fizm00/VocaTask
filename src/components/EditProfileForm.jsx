import React from "react";
import InputFieldComponent from "./InputFieldComponent";

function EditProfileForm({ profileData, onInputChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-8">
      <InputFieldComponent
        label="Profile URL"
        type="url"
        name="profileUrl"
        value={profileData.profileUrl}
        onChange={onInputChange}
        placeholder="https://your-profile-url.com"
      />
      <InputFieldComponent
        label="Name"
        type="text"
        name="name"
        value={profileData.name}
        onChange={onInputChange}
        placeholder="Your Name"
      />
      <InputFieldComponent
        label="Email"
        type="email"
        name="email"
        value={profileData.email}
        onChange={onInputChange}
        placeholder="Your Email"
      />
      <InputFieldComponent
        label="Password"
        type="password"
        name="password"
        value={profileData.password}
        onChange={onInputChange}
        placeholder="Your Password"
      />

      <button
        type="submit"
        className="bg-[#0d0714] text-white py-3 px-6 rounded-lg mt-4 font-semibold border border-[#D1B5F5] hover:bg-[#523C72] hover:border-[#D1B5F5] focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
}

export default EditProfileForm;