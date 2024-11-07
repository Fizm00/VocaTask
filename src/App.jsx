import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Task from "./pages/Task";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/task" element={<Task />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
