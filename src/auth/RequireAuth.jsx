import { Navigate, Outlet } from 'react-router-dom';

/**
 * Parent route wrapper:
 *   - If a valid token exists → render nested routes (Outlet).
 *   - If not → push user back to "/" (Login).
 */
const RequireAuth = () => {
    const token = localStorage.getItem('token');   // or from Redux / Context

    return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default RequireAuth;