import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);
  const [randomJokes, setrandomJokes] = useState([]);

  useEffect( () => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })

  function generateRandomJokes(){
    const randomIndex = Math.floor(Math.random()*10);
    setrandomJokes(jokes[randomIndex].content);
  }

  return (
    <>
      <h1>Chai and full stack</h1>
      <button style={{backgroundColor:'red', color:'white'}} onClick={generateRandomJokes}>Gerate random jokes</button>

      {
        <p>{randomJokes}</p>
      }
    </>
  )
}

export default App
