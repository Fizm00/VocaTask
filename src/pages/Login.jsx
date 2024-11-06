// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = (event) => {
    event.preventDefault();
    // After successful login logic, navigate to Task page
    navigate('/task');
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="bg-[#0d0714] flex items-center justify-center min-h-screen p-4 sm:p-6">
      <div className="bg-[#1D1825] p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#9E78CF] mb-2 -mt-2 sm:-mt-4">VOCA</h1>
        <h2 className="text-center text-xl sm:text-2xl text-white mb-4">Task</h2>
        <form onSubmit={handleSignIn} className="space-y-4 sm:space-y-6">
          <InputField 
            label="Email" 
            type="email" 
            id="email" 
            placeholder="Enter your email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <InputField 
            label="Password" 
            type="password" 
            id="password" 
            placeholder="Enter your password" 
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <Button text="Sign In" iconClass="fas fa-check" />
          <p className="text-center text-[#D1B5F5] mt-4">
            Don't have an account?{" "}
            <button onClick={goToSignUp} className="text-[#9E78CF] hover:underline">
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
