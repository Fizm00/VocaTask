// src/pages/SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        // After successful sign-up, navigate to Task page
        navigate('/task');
    };

    const goToLogin = () => {
        navigate('/');
    };

    return (
        <div className="bg-[#0d0714] flex items-center justify-center min-h-screen p-4 sm:p-6">
            <div className="bg-[#1D1825] p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg">
                <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#9E78CF] mb-2 -mt-2 sm:-mt-4">VOCA</h1>
                <h2 className="text-center text-xl sm:text-2xl text-white mb-4">Task</h2>
                <form onSubmit={handleSignUp} className="space-y-4 sm:space-y-6">
                    <InputField label="Name" type="text" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                    <InputField label="Email" type="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                    <InputField label="Password" type="password" id="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                    <InputField label="Confirm Password" type="password" id="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} />
                    <Button text="Sign Up" iconClass="fas fa-user-plus" />
                    <p className="text-center text-[#D1B5F5] mt-4">
                        Already have an account?{" "}
                        <button onClick={goToLogin} className="text-[#9E78CF] hover:underline">
                            Sign In
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
