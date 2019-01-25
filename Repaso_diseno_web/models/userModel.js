'use strict'

const mongoose =  require('mongoose'), // Cargamos el módulo de mongoose
	  Schema = mongoose.Schema; // Uso de esquemas

// Creamos el objeto del esquema y sus atributos
var userSchema = Schema({
    name: String,
    lastname: String
});


module.exports = mongoose.model('Users', userSchema); // Exportacion del modulo 'mongoose.model' para usar en "userControllers.js"
                                                      // 'User' es el nombre de la coleccion en la DB