import React from 'react';

function Button({ text, iconClass, onClick }) {
  return (
    <button
      className="w-full bg-[#a18aff] text-white p-2 rounded hover:bg-[#8f7aff] transition duration-150"
      onClick={onClick}
    >
      {iconClass && <i className={`${iconClass} mr-2`}></i>}
      {text}
    </button>
  );
}

export default Button;
