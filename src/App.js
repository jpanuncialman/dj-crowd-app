import Body from './Body';
import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://us-central1-dj-crowd-app.cloudfunctions.net/getAllUsers')
    .then(response => {
      console.log("RESPONSE1: ", response)
        return response.json()
    })
    .then(responseJson => {
      console.log("RESPONSE: ", responseJson)
      setUsers(responseJson.users);
    })
    .catch(error => {
        // handle the error
        console.log(error)
    });

  }, [])
  return (
    <div className="App">
      

        {users.map(u => ({...u, imgId: getRandomIntForImg(4), xPos: getRandomPercent(), delayId: getRandomIntForImg(4), animateId: getRandomIntForImg(2)})).map(u => <Body user={u} />)}

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
  return Math.floor(Math.random() * 90) + 1 + '%'
}

export default App;
