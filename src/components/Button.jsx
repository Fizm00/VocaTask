// src/components/Button.jsx
import React from 'react';

function Button({ text, iconClass, onClick, className }) {
  return (
    <button
      className={`w-full bg-[#0d0714] text-white p-2 rounded border-2 border-[#523C72] hover:border-[#D1B5F5] hover:bg-[#9E78CF] transition duration-150 ${className}`}
      onClick={onClick}
    >
      {iconClass && <i className={`${iconClass} mr-2`}></i>}
      {text}
    </button>
  );
}

export default Button;
