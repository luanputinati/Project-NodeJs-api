//Importando pacotes
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var productController = require('../controllers/product-controller');
var authService = require('../services/auth-services');

//Rotas para produto
//POST => localhost:3000/api/produtos
router.post('/', authService.authorize, productController.post);

//GET -> localhost:3000/api/proutos
router.get('/', productController.getAll);

//GetById -> localhost:3000/api/proutos/ID
router.get('/:productId', productController.getById);

//Put -> localhost:3000/api/proutos/ID
router.put('/:productId', productController.put);

//Delete -> localhost:3000/api/proutos/ID
router.delete('/:productId', productController.delete);

module.exports = router;