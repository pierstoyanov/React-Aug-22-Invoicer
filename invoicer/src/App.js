import logo from './logo.svg';
import './App.css';
//React imports
import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

//Firebase imports
import { app, analytics } from './Config/firebase.config'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

//Messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Components
import ResponsiveAppBar from './components/common/ResponsiveAppBar';
import ProfileForm from './components/common/ProfileForm';
import About from './components/About';
import Homepage from './components/Homepage';

function App() {

  //Auth
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleAction = (id) => {
    console.log(id);
    const authentication = getAuth();

    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((res) => {
          navigate('/Homepage');
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        })
        .catch((error) => {
          //console.log(error);
          if(error.code === 'auth/wrong-password'){
            toast.error('Password is incorrect');
          }
          if(error.code === 'auth/user-not-found'){
            toast.error('Email is incorrect');
          }   
        })
    }

    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        //console.log(response));
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
          toast.error('This email is allready registered');
        }
      })
    }
    navigate('/home');
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');

    if (authToken) {
        navigate('/Homepage');
    }

  }, [])


  //Routing
  const navigate = useNavigate();

  return (
    <div className="App">

    {/* <header className="App-header"> */}
    <header>
      <ResponsiveAppBar />
    </header>
    
    <main>
      <Routes>
        <Route 
          path="/Login" 
          element={<ProfileForm
             title="Login"
             setEmail = {setEmail}
             setPassword = {setPassword}
             handleAction={() => handleAction(1)} 
            />} 
          />
        <Route path="/Register" 
          element={<ProfileForm 
              title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />} 
          />
        <Route path="/About" element={<About />} />
        <Route path="/Homepage" element={<Homepage />} />
      
      </Routes>
      

    {/* <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <LoginForm /> */}


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
    </main>
    </div>      
  );
}

export default App;
