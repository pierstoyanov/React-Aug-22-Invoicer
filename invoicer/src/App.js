import logo from './logo.svg';
import './App.css';

import { Link } from "react-router-dom";
import LoginForm from './components/common/LoginForm';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Invoicer!</h1>
      </header> */}
      
      {/* <main> */}
        <Link to="/">Home</Link>

        <LoginForm />


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
      {/* </main> */}

      
    </div>
  );
}

export default App;
