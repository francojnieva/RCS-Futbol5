const express = require('express');
const path = require('path');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8081;

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use(cors());
  }

  routes() {
    // Define tus rutas aquí
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor funcionando en el puerto ${this.port}`);
    }).on('error', (err) => {
      console.error('Error en el servidor:', err);
    });
  }
}

module.exports = Server;
