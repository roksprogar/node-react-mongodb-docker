import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const API_HOST = process.env.REACT_APP_API_HOST || 'localhost';
  const API_PORT = process.env.REACT_APP_API_PORT || 3002;
  const API_BASE_ADDRESS = `http://${API_HOST}:${API_PORT}`;

  const [response, setResponse] = useState('');
  const [mongoHealth, setMongoHealth] = useState('fail');

  useEffect(() => {
    // console.log('Request on address: ', API_BASE_ADDRESS);
    const fetchData = async () => {
      const result = await axios.get(`${API_BASE_ADDRESS}/`);
      setResponse(result.data);
    };
    fetchData();
  }, [API_BASE_ADDRESS]);

  useEffect(() => {
    const checkHeath = async () => {
      const result = await axios.get(`${API_BASE_ADDRESS}/healthcheck`);
      setMongoHealth(result.data.status);
    };
    const checkStatusTimer = setTimeout(() => checkHeath(), 1000);
    return () => {
      clearInterval(checkStatusTimer);
    };
  }, [API_BASE_ADDRESS]);

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
        <h4>The status of the MongoDb connection is: {mongoHealth}</h4>
      </header>
    </div>
  );
}

export default App;
