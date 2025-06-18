import { FaHome, FaChartBar, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MENU = [
    { key: 'home', label: 'Home', icon: <FaHome />, path: '/dashboard' },
    { key: 'reports', label: 'Reports', icon: <FaChartBar /> },
    { key: 'createUser', label: 'Create User', icon: <FaUserPlus />, path: '/create-user' },
];

const Sidebar = () => {
    const navigate = useNavigate();
    return (
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
    )
};

const styles = {
    container: {
        width: 220,
        backgroundColor: '#2c3e50',
        color: '#fff',
        padding: '20px 10px',
        height: '100%',
    },
    item: {
        padding: 10,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    },
};

export default Sidebar;
