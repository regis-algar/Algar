# Usar a imagem oficial do Node.js
FROM node:14

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta que a API usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "node", "server.js" ]