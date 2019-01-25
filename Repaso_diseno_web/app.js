/*
 * app.js: Configuracion de express
 */    

'use strict'

const express = require('express'),
      bodyParser = require("body-parser"),
      userRoute = require("./routes/userRoute.js"); // importa las rutas

const app = express();

//app.use(express.static('src')); // Carga arcivos estaticos en el route "/"
app.use('/static', express.static('src')) // Carga arcivos estaticos en el route "/static"


// Carga middlewares, un metodo que se ejecuta antes que llegue a un controlador
// bodyParser convierte el body de las peticiones a JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', userRoute); // Carga el enrutador

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

module.exports = app; // Exportacion del modulo 'app' para usar en "index.js"