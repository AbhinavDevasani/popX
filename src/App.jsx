import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function MainApp() {
  const [user, setUser] = useState({
    name: 'Marry Doe',
    email: 'Marry@Gmail.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  });

  const handleRegister = (name, email) => {
    setUser((prev) => ({
      ...prev,
      name: name || 'Marry Doe',
      email: email || 'Marry@Gmail.com',
    }));
  };

  const handleLogin = (email) => {
    setUser((prev) => ({
      ...prev,
      name: email.split('@')[0] || 'Marry Doe',
      email: email || 'Marry@Gmail.com',
    }));
  };

  const handleSelectPhoto = (photoUrl) => {
    setUser((prev) => ({
      ...prev,
      avatar: photoUrl,
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-white md:shadow-lg flex flex-col relative overflow-hidden">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route 
          path="/profile" 
          element={
            <Profile 
              user={user} 
              onSelectPhoto={handleSelectPhoto} 
            />
          } 
        />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}
