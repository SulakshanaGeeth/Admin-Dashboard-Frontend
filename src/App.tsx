import React, { Suspense, useEffect } from 'react'
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Containers
const DefaultLayout = React.lazy(() => import('./layouts/DefaultLayout.jsx'))

import Login from './Login';
import Dashboard from './pages/Dashboard.jsx'
import { ToastContainer } from 'react-toastify';
import RequireAuth from './auth/RequireAuth.jsx';
import AppLayout from './layouts/AppLayout.jsx';
import CreateUser from './pages/CreateUser.jsx';
import CreateRole from './pages/CreateRole.jsx';
import ViewRoles from './pages/ViewRoles.jsx';
import ViewUsers from './pages/ViewUsers.jsx'
import ViewPermissions from './pages/ViewPermissions.jsx';
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
              <Route path="/view-roles" element={<ViewRoles />} />
              <Route path="/view-permissions" element={<ViewPermissions />} />
              <Route path="/view-users" element={<ViewUsers />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
