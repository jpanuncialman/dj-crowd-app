import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch('https://api.twitch.tv/helix/users?login=bubucore69', {
      method: "GET",
      headers: {
        "Client-ID": "e4d8gb8osi3kbahha86mf1hajtzy8e",
        "Authorization": "Bearer w25plakq3zpltlyd2dyb1b0zrko53z"
      }
    })
    .then(response => {
        console.log("RESPONSE: ", response)
    })
    .catch(error => {
        // handle the error
        console.log(error)
    });

  }, [])
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
