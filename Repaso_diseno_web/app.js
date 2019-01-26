/*
 * app.js: Configuracion de express
 */    

'use strict'

const express = require('express'),
      bodyParser = require("body-parser"),
      methodOverride = require('method-override'),
      userRoute = require("./routes/userRoute.js"); // importa las rutas

const app = express();

// Carga de middlewares, un metodo que se ejecuta antes que llegue a un controlador
app.use(express.static('src')); // Carga arcivos estaticos en el route "/"

app.use(bodyParser.urlencoded({ extended: false })); // bodyParser convierte el body de las peticiones POST a JSON
app.use(bodyParser.json());

//app.use(methodOverride('_method')) // Sobrescribe el metodo POST con ?_method=DELETE o PUT
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

app.use('/data', userRoute); // Carga el enrutador


app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

module.exports = app; // Exportacion del modulo 'app' para usar en "index.js"