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
        <div style={{ minHeight: '100vh', paddingTop: 60 }}>
            <Topbar onLogout={handleLogout} />

            <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
                <Sidebar onSelect={setPage} />

                <main style={{ flex: 1, padding: 20, overflowY: 'auto' }}>
                    {page === 'home' && <h1>Welcome to the Dashboard!</h1>}
                    {page === 'reports' && <h1>Reports Page</h1>}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
