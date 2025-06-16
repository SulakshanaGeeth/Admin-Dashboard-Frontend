import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    const [page, setPage] = useState('home');

    const handleLogout = () => {
        // TODO: add your real logout logic
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
