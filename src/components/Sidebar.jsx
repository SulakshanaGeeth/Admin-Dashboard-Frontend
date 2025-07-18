import { useState } from 'react';
import { FaHome, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const MENU = [
    { key: 'home', label: 'Home', icon: <FaHome />, path: '/' },
    { key: 'createUser', label: 'Create User', icon: <FaUserPlus />, path: '/create-user' },
    { key: 'viweUsers', label: 'View Users', icon: <FaUserPlus />, path: '/view-users' },
    { key: 'createRole', label: 'Create Role', icon: <FaUserPlus />, path: '/create-role' },
    { key: 'viewRoles', label: 'View Roles', icon: <FaUserPlus />, path: '/view-roles' },
    { key: 'viewPermissons', label: 'View Permissons', icon: <FaUserPlus />, path: '/view-permissions' },
];

const Sidebar = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);

    const toggleSidebar = () => setIsVisible(prev => !prev);

    return (
        <div style={{ display: 'flex' }}>
            <button
                onClick={toggleSidebar}
                style={{
                    ...styles.toggleButton,
                    left: isVisible ? 173 : 0,
                }}
            >
                <FaBars size={20} />
            </button>

            {isVisible && (
                <div style={styles.container}>
                    <h2 style={{ color: '#ecf0f1' }}>Menu</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {MENU.map(item => (
                            <li
                                key={item.key}
                                style={styles.item}
                                onClick={() => navigate(item.path)}
                            >
                                {item.icon}
                                <span style={{ marginLeft: 8 }}>{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        width: 220,
        backgroundColor: '#2c3e50',
        color: '#fff',
        padding: '20px 10px',
        height: '100vh',
    },
    item: {
        padding: 10,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    },
    toggleButton: {
        position: 'absolute',
        top: 20,
        zIndex: 1000,
        padding: '8px 12px',
        cursor: 'pointer',
        transition: 'left 0.3s ease', // <-- Smooth movement
    }
};

export default Sidebar;

