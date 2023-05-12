FROM node:latest
# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app
# Copiar los archivos necesarios para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todos los archivos de la aplicación
COPY . .

# Exponer el puerto 3000 (el puerto en el que se ejecutará la aplicación)
EXPOSE 3001

EXPOSE 27017


# Compilar el código TypeScript
RUN npm run build


# Iniciar la aplicación con el comando "npm start"
CMD ["npm", "start"]