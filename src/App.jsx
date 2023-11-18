import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [characters, setCharacters] = useState ([])

  useEffect (() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=808")
    .then ( res => {
      console.log(res.data.results)
      setCharacters(res.data.results)
    })
    .catch ( err => {
      console.log(err)
    })
  }, [])

  return (
    <>
      {
        characters.map((character, idx) => 
        <p key={idx}>{character.name}</p>)
      }
    </>
  )
}

export default App
