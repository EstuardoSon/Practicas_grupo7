#NODE
# Definir la imagen y version a utilizar para la imagen
FROM node:18-alpine

# Definir la carpeta en la que se estaran cargando los archivos
WORKDIR /app

# Copiar los archivos pakage y package-lock dentro de /app
COPY package.json ./
COPY package-lock.json ./
# Instalar las dependencias del proyecto
RUN npm install --silent

# Exponer el puerto 8080 para permitir conexiones con contenedores en la misma red
EXPOSE 8080

# Copiar los archivos del proyecto dentro de /app
COPY . ./

# Ejecutar el comando para iniciar el servidor dentro del contenedor
CMD [ "node", "src/index.js" ]