'use strict'

const express = require('express'),
	  userController = require("../controllers/userController.js"), // Carga el controlador
	  router = express.Router();


// Asociacion de los controladores con las rutas (peticiones)
router.get('/', userController.getUser);
router.get('/:id', userController.getUserById);

router.post('/', userController.postUser);

router.put('/', userController.putUser);

router.delete('/', userController.deleteUser);


module.exports = router; // Exportacion del modulo 'router' para usar en "app.js"