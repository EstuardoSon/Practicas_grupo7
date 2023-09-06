# Definir la imagen y version a utilizar para la imagen
FROM mysql:8.0.32 as database

# Copiar el archivo dentro del contenedor
COPY ./DB.sql /docker-entrypoint-initdb.d

# Exponer el puerto 3306 para permitir conexiones con contenedores en la misma red
EXPOSE 3306