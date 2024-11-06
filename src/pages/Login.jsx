// src/pages/Login.jsx
import React from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

function Login() {
  const handleSignIn = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-[#0d0714] flex items-center justify-center min-h-screen">
      <div className="bg-[#1D1825] p-20 rounded-2xl shadow-lg w-full lg:max-w-xl">
        <h1 className="text-center text-3xl font-bold text-[#9E78CF] mb-2 -mt-6">VOCA</h1>
        <h2 className="text-center text-3xl text-white mb-4 -mt-2">Task</h2>
        <form onSubmit={handleSignIn} className="space-y-6">
          <InputField label="Email" type="email" id="email" placeholder="Enter your email" />
          <InputField label="Password" type="password" id="password" placeholder="Enter your password" />
          <Button text="Sign In" iconClass="fas fa-check" className="mt-6 mb-4" />
          <p className="text-center text-[#D1B5F5] mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-[#9E78CF] hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
