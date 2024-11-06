// src/components/Button.jsx
import React from 'react';

function Button({ text, iconClass, onClick, className }) {
  return (
    <button
      className={`w-full bg-[#523C72] text-white p-2 rounded border-2 border-[#D1B5F5] hover:border-[#9E78CF] hover:bg-[#0d0714] transition duration-150 ${className} mt-4`} // Coba langsung tambahkan mt-4
      onClick={onClick}
    >
      {iconClass && <i className={`${iconClass} mr-2`}></i>}
      {text}
    </button>
  );
}

export default Button;
