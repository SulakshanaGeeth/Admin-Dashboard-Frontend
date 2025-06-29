import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './pages/Dashboard.jsx'
import { ToastContainer } from 'react-toastify';
import RequireAuth from './auth/RequireAuth.jsx';
import AppLayout from './layouts/AppLayout.jsx';
import CreateUser from './pages/CreateUser.jsx';
import CreateRole from './pages/CreateRole.jsx';
import AssignPermission from './pages/AssignPermisstion.jsx';
import './App.css'

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          {/* public route */}
          <Route path="/login" element={<Login />} />

          {/* protected area */}
          <Route element={<RequireAuth />}>
            {/* layout with Topbar + Sidebar */}
            <Route element={<AppLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create-user" element={<CreateUser />} />
              <Route path="/create-role" element={<CreateRole />} />
              <Route path="/assign-permission" element={<AssignPermission />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
