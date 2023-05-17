FROM node:latest

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todos los archivos de la aplicación
COPY . .

# Exponer los puertos en los que se ejecutará la aplicación y la base de datos
EXPOSE 3001
EXPOSE 27017

# Compilar el código TypeScript
RUN npm run build

# Iniciar la aplicación con el comando "npm start"
CMD ["npm", "start"]