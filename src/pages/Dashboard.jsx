import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState('home');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
        console.log('Logging out…');
    };

    return (
        <h1>Welcome to the Dashboard!</h1>
    );
};

export default Dashboard;
