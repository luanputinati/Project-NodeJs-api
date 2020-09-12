//Importando pacotes
var express = require('express');
var router = express.Router();
var Produto = require('../app/models/product');
var mongoose = require('mongoose');

//Rotas para produto
router.post('/', function(req, res){
    var produto = new Produto();
    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    produto.descricao = req.body.descricao;

    produto.save(function(error){
        if(error)
            res.send("Erro ao tentar salvar um novo produto", error);

        res.status(201).json({message: 'produto inserido com sucesso'});
    });
});

//Get -> localhost:3000/api/proutos
router.get('/', function(req, res){
    Produto.find(function(err, prods){
        if(err)
            res.send(err);
            
        res.status(200).json({
            message: "retorno ok de todos os produtos",
            allProducts: prods
        });
    });
});

module.exports = router;