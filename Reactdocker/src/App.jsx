import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [dato, setDato] = useState("");

  function presionar() {
    fetch('http://localhost:8080/')
      .then(data => {
        return data.json();
      })
      .then(post => {
        setDato(post)
      });
  }

  return (
    <>
      <h1 onClick={presionar}>Datos</h1>
      {dato.respuesta}
    </>
  )
}

export default App
