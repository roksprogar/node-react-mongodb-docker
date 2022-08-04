import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Notes from './components/Notes';

function App() {
  // const API_HOST = process.env.REACT_APP_API_HOST || 'localhost';
  // const API_PORT = process.env.REACT_APP_API_PORT || 3002;
  // const API_BASE_ADDRESS = `http://${API_HOST}:${API_PORT}`;

  // const [response, setResponse] = useState('');
  // const [mongoHealth, setMongoHealth] = useState('fail');

  // useEffect(() => {
  //   // console.log('Request on address: ', API_BASE_ADDRESS);
  //   const fetchData = async () => {
  //     const result = await axios.get(`${API_BASE_ADDRESS}/api/`);
  //     setResponse(result.data);
  //   };
  //   fetchData();
  // }, [API_BASE_ADDRESS]);

  // useEffect(() => {
  //   const checkHeath = async () => {
  //     const result = await axios.get(`${API_BASE_ADDRESS}/api/healthcheck`);
  //     setMongoHealth(result.data.status);
  //   };
  //   checkHeath();
  //   const checkStatusTimer = setTimeout(() => checkHeath(), 10000);
  //   return () => {
  //     clearInterval(checkStatusTimer);
  //   };
  // }, [API_BASE_ADDRESS]);

  return (
    <div className="App">
      <Navbar />
      <Notes />
    </div>
  );
}

export default App;
