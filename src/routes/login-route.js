var express = require('express');
var router = express.Router();
var customerController = require('../controllers/customer-controller');

router.post("/create" , customerController.customerRegister);

module.exports = router;