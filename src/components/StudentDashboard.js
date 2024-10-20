import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/');
    };

    return (
        <div>
            <h2>Student Dashboard</h2>
            <p>Welcome, {username}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default StudentDashboard;
