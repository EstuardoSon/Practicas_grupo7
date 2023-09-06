CREATE DATABASE IF NOT EXISTS ejemplo;
USE ejemplo;

CREATE TABLE USUARIO(
    id int,
    nombre varchar(20),
    apellido varchar(20)
);

INSERT INTO USUARIO VALUES (1,'PRUEBA','INICIALES');