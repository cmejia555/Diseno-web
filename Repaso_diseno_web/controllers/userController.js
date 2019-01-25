'use strict'

const UserModel = require("../models/userModel.js");

function getUser(request, response, next) { // Metodo GET: devuelve todos los registros (documento)
    // En GET se debe usar request.query para tener las peticiones parciadas en un objeto
    UserModel.find(request.query, (err, registers) => {
        if(err){
            response.send(err);
        }
        response.json(registers);
    });
    console.log('Send user(s)');        

}

function getUserById(request, response, next) { // Metodo GET: devuelve un registro (documento)
    console.log('Send user by id');
    console.log(request.params.id);

    response.send('Send user by id');
}

function postUser(request, response) { // Metodo POST: crea un registro (documento)
    // En post el dato viene codificado: request.body es el objeto de los datos
    let newUser = UserModel(request.body);
    newUser.save((err, register) => {
        if(err) response.send(err);
        response.json(register);
    })

    //response.send('User created'); // NO PUEDO ENVIAR DOS SEND!!!!??
    console.log('User created');
}

function putUser(request, response) { // Metodo PUT: actualiza un registro (documento)
    response.send('User updated');
}

function deleteUser(request, response) { // Metodo DELETE: borra un registro (documento)
    response.send('User deleted');
}

// Exportacion de los controladores para usar en "userRoute.js" (el enrutador)
exports.getUser = getUser;
exports.getUserById = getUserById;
exports.postUser = postUser;
exports.putUser = putUser;
exports.deleteUser = deleteUser;
