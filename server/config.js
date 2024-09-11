const express = require("express");
const path = require("path");
const cors = require("cors")
require('dotenv').config();


class Server {
    constructor() {
      this.app = express()
      this.port = process.env.PORT || 8080
  
      this.middlewares()
      this.routes()
    }
  
    middlewares() {
      /*middelwares*/
      this.app.use(express.json());
      this.app.use(express.static(path.join(__dirname, "public")));
      this.app.use(cors())
    }
  
    routes(){
    }
  
    listen() {
      //servidor funcionando
      this.app.listen(this.port, () => {
        console.log("Servidor funcionando en el puerto", this.port);
      });
    }
  }
  
  module.exports = Server