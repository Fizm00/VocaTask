import React from "react";

function InputField({ label, type, id, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-400 mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full p-2 border border-[#9E78CF] rounded-lg bg-[#0d0b1e] text-gray-400 placeholder:text-[#777777] focus:border-[#9E78CF] focus:outline-none focus:ring-1 focus:ring-[#9E78CF]"
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
