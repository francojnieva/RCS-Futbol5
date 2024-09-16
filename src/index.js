const Server = require("../server/app.js")
const server = new Server ()

server.listen()


//El index sólo levantará el Server y todas las demás peticiones están en config

//node --env-file .env --watch index.js 