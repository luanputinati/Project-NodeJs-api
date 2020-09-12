var express = require('express');
var router = express.Router();

//Padrão Middleware
router.use(function(req, res, next){
    console.log("interceptação pelo Middleware ok"); // LOG, Autenticações, Validações...
    next();
});

router.get('/', (req, res) => res.send("Rota teste ok"));

module.exports = router;