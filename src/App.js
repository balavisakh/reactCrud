import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import { HashRouter as Router, Route} from 'react-router-dom';
import Aboutus from './components/about-us/Aboutus';
import Contactus from './contact-us/Contactus';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      <Router>
        <Route path = "/" exact component = {Home} />
        <Route path = "/about-us" component = {Aboutus} />
        <Route path = "/contact-us" component = {Contactus} />
      </Router>
    </div>
  );
}

export default App;
