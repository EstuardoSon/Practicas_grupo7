const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

app.use(cors());
app.set("port", 8080);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", async(req, res) =>{
    res.json({respuesta: "Probando DOCKER"})
})

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});