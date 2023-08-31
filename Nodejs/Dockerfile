#NODE
FROM node:18-alpine
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

EXPOSE 8080
COPY . ./
CMD [ "node", "src/index.js" ]