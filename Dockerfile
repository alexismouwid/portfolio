FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencia
COPY package*.json ./

# Instalar dependencias

RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto del dev server
EXPOSE 5173

# Comando para iniciar el servidor de desarrollo
CMD ["npm", "run", "dev"]

