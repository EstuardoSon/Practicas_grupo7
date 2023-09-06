import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [datos, setDatos] = useState();

  function cargarDatos(e) {
    e.preventDefault();
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.respuesta)
        setDatos(data.respuesta);
      });
  }

  return (
    <div>
      <button onClick={cargarDatos}>Datos</button>
      <table style={{ color: "white" }}>
        <thead>
          <tr key={0}>
            <td>ID</td>
            <td>NOMBRE</td>
            <td>APELLIDO</td>
          </tr>
        </thead>
        <tbody>
          {datos
            ? datos.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.apellido}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default App;
