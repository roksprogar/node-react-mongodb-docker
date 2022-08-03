import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const API_HOST = process.env.REACT_APP_API_HOST || 'localhost';
    const API_PORT = process.env.REACT_APP_API_PORT || 3002;
    const API_BASE_ADDRESS = `http://${API_HOST}:${API_PORT}`;
    // console.log('Request on address: ', API_BASE_ADDRESS);
    const fetchData = async () => {
      const result = await axios.get(`${API_BASE_ADDRESS}/`);
      setResponse(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
          The response is: {response}
        </a>
      </header>
    </div>
  );
}

export default App;
