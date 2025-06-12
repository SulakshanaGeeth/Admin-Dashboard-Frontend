import React, { useState } from 'react';
import { FaUserCircle, FaSignOutAlt, FaHome, FaChartBar } from 'react-icons/fa';

const Dashboard = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
        // Add your logout logic here
        console.log("User logged out");
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Sidebar */}
            <div style={{ width: '220px', backgroundColor: '#2c3e50', color: 'white', padding: '20px 10px' }}>
                <h2 style={{ color: '#ecf0f1' }}>Menu</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '10px', cursor: 'pointer' }}><FaHome /> Home</li>
                    <li style={{ padding: '10px', cursor: 'pointer' }}><FaChartBar /> Reports</li>
                </ul>
            </div>

            {/* Main content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Topbar */}
                <div style={{
                    height: '60px',
                    backgroundColor: '#34495e',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    padding: '0 20px',
                    position: 'relative'
                }}>
                    <FaUserCircle
                        size={30}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowDropdown(!showDropdown)}
                    />
                    {showDropdown && (
                        <div style={{
                            position: 'absolute',
                            top: '60px',
                            right: '20px',
                            backgroundColor: '#fff',
                            color: '#333',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                            zIndex: 1000
                        }}>
                            <div
                                onClick={handleLogout}
                                style={{ padding: '10px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                            >
                                <FaSignOutAlt style={{ marginRight: '8px' }} /> Logout
                            </div>
                        </div>
                    )}
                </div>

                {/* Page content */}
                <div style={{ padding: '20px' }}>
                    <h1>Welcome to the Dashboard!</h1>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
