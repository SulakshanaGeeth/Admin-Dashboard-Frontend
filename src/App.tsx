import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './pages/Dashboard.jsx'
import { ToastContainer } from 'react-toastify';
import RequireAuth from './auth/RequireAuth.jsx';
import './App.css'

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* add more private paths here */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
