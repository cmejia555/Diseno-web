'use strict'


const app = require("./app.js"), // Modulo de configuracion de express
	  mongoose = require("mongoose"), // Modulo para conectar a MongoDB
	  port = 3000, // Puerto que va a escuchar el servidor ante las peticiones
      uri = "mongodb://localhost:27017/firstdb";


mongoose.Promise = global.Promise; // Indica a Mongoose usar conexión con Promesas


mongoose.connect(uri)
    .then(() => {
        console.log("Conexion establecida a la base de datos correctamente")

        app.listen(port, () => { // Inicializa el servidor
            console.log("servidor corriendo en http://localhost:3000");
        });
    })
    // Si no se conecta correctamente escupimos el error
    .catch(err => console.log(err));


/*var server = require("./node_js/server.js"); // no es necesario la extension .js
var router = require("./node_js/router.js"); // si es necesario ./xxx
var requestHandlers = require("./node_js/requestHandlers.js");

// Seteo los handlers
var handle = {} //objeto vacio
handle["/"] = requestHandlers.sendHtml;
handle["/index.html"] = requestHandlers.sendHtml;
handle["/estilos.css"] = requestHandlers.sendCss;
handle["/script.js"] = requestHandlers.sendJs;
handle["/saveData"] = requestHandlers.save;

server.init(router.route, handle);


var db = require("./node_js/db.js");

db.init("firstdb");
*/