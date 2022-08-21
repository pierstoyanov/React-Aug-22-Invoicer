import logo from './logo.svg';
import './App.css';
//React imports
//import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

//Firebase imports
// import { app, analytics } from './Config/firebase.config'
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { UserAuthContextProvider } from './Contexts/UserAuthContext';

import { createTheme, ThemeProvider } from '@mui/material';

//Messages
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

//Components
import ResponsiveAppBar from './components/Common/ResponsiveAppBar/ResponsiveAppBar';
import ProfileForm from './components/Common/ProfileForm/ProfileForm';
import About from './components/About/About';
import Homepage from './components/Homepage/Homepage';
import AddInvoice from './components/Invoice/AddInvoice'
import { ToastContainer } from 'react-toastify';

function App() {
  //Routing
  const navigate = useNavigate();

  return (
    <div className="App">

    {/* <header className="App-header"> */}
    <header>
      {/* handleLogout = {handleLogout} */}
      <ResponsiveAppBar />
    </header>
    
    <main>
      <UserAuthContextProvider>
      <Routes>
        <Route path="/Login" 
          element={<ProfileForm
            title="Login"
            action='login' 
            />} 
        />
        <Route path="/Register" 
          element={<ProfileForm
            title="Register"
            action='register'
            />} 
          />
        <Route path="/About" element={<About />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/AddInvoice" element={<AddInvoice />} />
      
      </Routes>
      </UserAuthContextProvider>

      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
      </a>
    <ToastContainer />
    </main>
    </div>      
  );
}

export default App;
