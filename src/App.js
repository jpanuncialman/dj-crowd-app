import Body from './Body';
import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const apiCallInterval = setInterval(() => {
      fetch('https://us-central1-dj-crowd-app.cloudfunctions.net/getAllUsers')
      .then(response => {
          return response.json()
      })
      .then(responseJson => {
        setUsers(responseJson.users);
      })
      .catch(error => {
          // handle the error
          console.log(error)
      });
    }, 300000);

    return () => clearInterval(apiCallInterval);
  }, [])
  return (
    <div className="App">
      

        {users.map(u => ({...u, imgId: getRandomIntForImg(6), xPos: getRandomPercent(), delayId: getRandomIntForImg(4), animateId: getRandomIntForImg(3)})).map(u => <Body user={u} />)}

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
    </div>
  );
}

const getRandomIntForImg = (max) => {
  return Math.floor(Math.random() * max);
}

const getRandomPercent = () => {
  return Math.floor(Math.random() * 75) + 1 + '%'
}

export default App;
