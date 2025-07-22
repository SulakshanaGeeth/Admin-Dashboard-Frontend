import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MENU } from '../config/sidebarMenu';
import { styles } from '../styles/sidebarStyles';

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
                            <li key={item.key} style={{ ...styles.item, flexDirection: 'column', alignItems: 'flex-start' }}>
                                <div
                                    onClick={() => item.path && navigate(item.path)}
                                    style={{ display: 'flex', alignItems: 'center', cursor: item.path ? 'pointer' : 'default' }}
                                >
                                    {item.icon}
                                    <span style={{ marginLeft: 8 }}>{item.label}</span>
                                </div>

                                {/* Render sub-menu if children exist */}
                                {item.children && (
                                    <ul style={{ listStyle: 'none', paddingLeft: 20, marginTop: 5 }}>
                                        {item.children.map(sub => (
                                            <li key={sub.key} onClick={() => navigate(sub.path)} style={styles.subItem}>
                                                {sub.label}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sidebar;

