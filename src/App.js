import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch('https://us-central1-dj-crowd-app.cloudfunctions.net/getAllUsers', {
      method: "GET",

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
