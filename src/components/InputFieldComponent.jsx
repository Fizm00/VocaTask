import React from "react";

function InputFieldComponent({ label, type, placeholder, name, value, onChange }) {
  return (
    <div>
      <label className="text-sm mb-3 block">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-3 bg-[#1D1825] rounded-lg text-white border border-[#9E78CF] focus:outline-none focus:border-[#9E78CF]"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputFieldComponent;
