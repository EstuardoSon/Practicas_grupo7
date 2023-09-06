# Definir la imagen y version a utilizar para la imagen
FROM nginx:1.22.1

# Copiar los archivos de /dist dentro del contenedor
COPY ./dist /usr/share/nginx/html

# Exponer el puerto 80 para permitir conexiones con contenedores en la misma red
EXPOSE 80