import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Route path='/' exact component={Dashboard} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' exact component={SignUp} />
      </BrowserRouter>
    </>
  );
}

export default App;
