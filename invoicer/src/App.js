import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import ResponsiveAppBar from './components/common/ResponsiveAppBar'
import LoginForm from './components/common/LoginForm';
import About from './components/About'

function App() {
  return (
    <div className="App">

    {/* <header className="App-header"> */}
    <header>
      <ResponsiveAppBar />
    </header>
    
    <main>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/Login" element={<LoginForm title="Login" />} />
        <Route path="/Register" element={<LoginForm title="Register" />} />
        <Route path="/About" element={<About />} />
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
