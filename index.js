// apprequire('dotenv').config(); // Carga las variables de entorno
const mongoose = require('mongoose');
const Server = require('../server/config');

// Obtén la URI de MongoDB
const mongoURI = process.env.MONGODB;

if (!mongoURI) {
  throw new Error('MONGODB URI no está definida en las variables de entorno');
}

// Conecta a MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('DB conectada'))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

// Inicializa y arranca el servidor
const server = new Server();
server.listen();
