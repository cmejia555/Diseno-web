/*
 * index.js: Conexion a la base de datos e inicializacion del servidor
 */    

'use strict'

const app = require("./app.js"), // Modulo de configuracion de express
	  mongoose = require("mongoose"), // Modulo para conectar a MongoDB
	  port = 3000, // Puerto que va a escuchar el servidor ante las peticiones
      //uri = "mongodb://localhost:27017/firstdb";
      uri = "mongodb+srv://cmejia:20062013@cmejia-cluster-ov4ar.gcp.mongodb.net/test?retryWrites=true"


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
