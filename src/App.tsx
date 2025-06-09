import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import { ToastContainer } from 'react-toastify';
import './App.css'

function App() {

  return (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App
