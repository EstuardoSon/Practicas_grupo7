const mysql = require("mysql2");
const dotenv = require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.host, // Definir la url de la base de datos
    database: process.env.database, // Definir el nombre de la base de datos
    user: process.env.user,  // Definir el usuario de la conexion
    password: process.env.password, // Contrase;a del usuario de la base de datos
    port: process.env.port // Puerto de acceso a la base de datos
});

const getConnection = () => {
    return connection.promise();
}

module.exports = {
    getConnection
}