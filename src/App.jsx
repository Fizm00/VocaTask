// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'; // Halaman login
import SignUp from './pages/SignUp'; // Halaman signup
import Task from './pages/Task'; // Halaman task
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Halaman Login */}
        <Route path="/signup" element={<SignUp />} /> {/* Halaman SignUp */}
        <Route path="/task" element={<Task />} /> {/* Halaman Task */}
        <Route path='/editprofile' element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
