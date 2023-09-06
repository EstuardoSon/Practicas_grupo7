// Importar librerias
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

// Importar la conexion a la base de datos del archivo ./ConnectionDB
const { getConnection } = require("./ConnectionDB");
const connection = getConnection();

// Detalles de la api
app.use(cors());
app.set("port", 8080);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Endpoint / que consulta usuarios
app.get("/", async (req, res) => {
  const [result, error] = await connection.query(`SELECT * FROM USUARIO;`);
  res.json({ respuesta: result })
})

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});