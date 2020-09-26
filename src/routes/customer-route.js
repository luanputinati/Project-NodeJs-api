//Importando pacotes
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var customerController = require('../controllers/customer-controller');

//Rotas para produto
//POST => localhost:3000/api/usuarios
router.post('/', customerController.post);

//GET -> localhost:3000/api/usuarios
router.get('/', customerController.getAll);

//GetById -> localhost:3000/api/usuarios/ID
router.get('/:customerId', customerController.getById);

//Put -> localhost:3000/api/usuarios/ID
router.put('/:customerId', customerController.put);

//Delete -> localhost:3000/api/usuarios/ID
router.delete('/:customerId', customerController.delete);

module.exports = router;