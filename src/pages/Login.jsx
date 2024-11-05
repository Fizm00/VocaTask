// src/pages/Login.jsx
import React from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

function Login() {
  const handleSignIn = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-[#0d0b1e] min-h-screen w-full h-full">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-[#1a152e] p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-center text-2xl font-bold text-[#a18aff]">VOCA</h1>
          <h2 className="text-center text-xl text-white mb-6">Task Manager</h2>
          <form onSubmit={handleSignIn} className="flex flex-col">
            <InputField label="Email" type="email" id="email" placeholder="Enter your email" />
            <InputField label="Password" type="password" id="password" placeholder="Enter your password" />
            <Button text="Sign In" iconClass="fas fa-check" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
