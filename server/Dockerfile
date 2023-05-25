FROM node:latest

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todos los archivos de la aplicación
COPY . .

COPY .env ./

# Compilar el código TypeScript (si es necesario)
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 5000

# Iniciar la aplicación con el comando "npm start"
CMD ["npm", "start"]
