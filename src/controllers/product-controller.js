var Produto = require('../app/models/product');
var Categoria = require('../app/models/category');

//Rotas para produto
//POST
exports.post = function (req, res){
    var produto = new Produto();
    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    produto.descricao = req.body.descricao;

    // console.log(req.body);

    produto.save(function(error){
        if(error)
            res.send(`Erro ao tentar salvar um novo produto, ${error}`);
        
        res.status(201).json({message: 'produto inserido com sucesso'});
    });
}

//GET ALL
exports.getAll = function(req, res){
    Produto.find(function(err, prods){
        if(err)
            res.send(err);
            
        res.status(200).json({
            message: "retorno ok de todos os produtos",
            allProducts: prods
        });
    });
}

//GET by ID
exports.getById = function(req, res){
    var id = req.params.productId;

    Produto.findById(id, function(err, produto){
        if (err){
            res.status(500).json({
                message: "Erro ao tentar encontrar produto ID mal informado"
            });
        }else if(produto == null){
            res.status(400).json({
                message: "produto não encontrado para o ID informado"
            });
        }else{
            res.status(200).json({
                message: "produto localizado com sucesso",
                produto: produto
            });
        }
    });
}

//PUT
exports.put = function(req, res){
    var id = req.params.productId;
    console.log(id);

    Produto.findById(id, function(err, produto){
        if(err){
            res.status(500).json({
                message: "Erro ao tentar localizar o produto"
            });
        } else if(produto == null){
            res.status(400).json({
                message: "Produto não encontrado para o ID informado"
            });
        } else{
            produto.nome = req.body.nome;
            produto.preco = req.body.preco;
            produto.descricao = req.body.descricao;

            produto.save(function(error){
                if(error)
                    res.send(`Erro ao tentar atualizar o produto, ${err}`);
                res.status(200).json({
                    message: "produto atualizado com sucesso"
                });
            });
        }
    });
}

//DELETE
exports.delete = function(req, res){
    Produto.findByIdAndRemove(req.params.productId, (err, produto) => {
        if(err)
            res.status(500).send(`Erro ao deletar, ${error}`);
        var response = {
            message: "Produto removido com sucesso",
            id: produto.id
        };
        return res.status(200).send(response);
    });
}
