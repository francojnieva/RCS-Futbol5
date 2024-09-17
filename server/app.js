require("dotenv").config();
require("../DB/config.js");
const express = require('express');
const path = require('path');
const morgan = require("morgan");
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = 3001;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, 'public')));
  }

  routes() {
    this.app.use("/canchas", require("../routes/cancha.routes.js"));
    this.app.use("/usuarios", require("../routes/user.routes.js"));
    this.app.use("/reservas", require("../routes/reserva.routes.js"));

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
