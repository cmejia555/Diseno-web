'use strict'

const UserModel = require("../models/userModel.js");


/*
 * getUser(): Devuelve los registros de acuerdo al query 
 * Ejemplo -> http://localhost:3000?name=cesar (name=cesar es la query)
 */
function getUser(request, response, next) {
    UserModel.find(request.query, (err, registers) => { // request.query tiene peticiones parciadas en un objeto
        if(err){
            response.send(err);
        }
        response.json(registers);
    });
    console.log('Send user(s)');
}

/*
 * getUserById(): Devuelve un registro de acuerdo al ID pedido
 * Ejemplo -> http://localhost:3000/data/10  (/10 es el parametro)
 */
function getUserById(request, response, next) {
    UserModel.findById(request.params.id, (err, register) => {
        if(err) response.send(err);

        response.json(register);
    });

    console.log('Send user by id ' + request.params.id);
}


/*
 * postUser(): Crea un registro (documento)
 * Ejemplo -> http://localhost:3000/data
 */
function postUser(request, response) {
    let newUser = UserModel(request.body); // En post el dato viene codificado: request.body es el objeto de los datos
    newUser.save((err, register) => {
        if(err) response.send(err);
        response.json(register);
    })

    //response.send('User created'); // NO PUEDO ENVIAR DOS SEND!!!!??
    console.log('User created');
}

/*
 * putUser(): Actualiza un registro por el campo 'name'
 * Ejemplo -> http://localhost:3000/data
 */
function putUser(request, response) {
    UserModel.findOneAndUpdate({ name: request.body.name }, request.body, 
        { new: true }, (err, register) => {
            if(err) response.send(err);
            response.json(register);
    });
    console.log('User updated ');
}

/*
 * deleteUser(): Elimina un registro por el campo 'name'
 * Ejemplo -> http://localhost:3000/data
 */
function deleteUser(request, response) {
    console.log(request.body.name);
    UserModel.findOneAndDelete({ name: request.body.name }, (err, register) => {
            if(err) response.send(err);
            response.json(register);
    });
    console.log('User deleted ');
}


// Exportacion de los controladores para usar en "userRoute.js" (el enrutador)
exports.getUser = getUser;
exports.getUserById = getUserById;
exports.postUser = postUser;
exports.putUser = putUser;
exports.deleteUser = deleteUser;
