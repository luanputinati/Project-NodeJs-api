var Customer = require('../app/models/customer');

//Rotas para produto
//POST
exports.post = function (req, res){
    var customer = new Customer();
    customer.nome = req.body.nome;
    customer.email = req.body.email;
    customer.password = req.body.password;

    // console.log(req.body);

    customer.save(function(error){
        if(error)
            res.send(`Erro ao tentar salvar um novo usuário, ${error}`);
        
        res.status(201).json({message: 'Usuário inserido com sucesso'});
    });
}

//GET ALL
exports.getAll = function(req, res){
    Customer.find(function(err, prods){
        if(err)
            res.send(err);
            
        res.status(200).json({
            message: "retorno ok de todos os usuário",
            allProducts: prods
        });
    });
}

//GET by ID
exports.getById = function(req, res){
    var id = req.params.customerId;

    Customer.findById(id, function(err, customer){
        if (err){
            res.status(500).json({
                message: "Erro ao tentar encontrar usuário ID mal informado"
            });
        }else if(customer == null){
            res.status(400).json({
                message: "usuário não encontrado para o ID informado"
            });
        }else{
            res.status(200).json({
                message: "usuário localizado com sucesso",
                customer: customer
            });
        }
    });
}

//PUT
exports.put = function(req, res){
    var id = req.params.customerId;
    console.log(id);

    Customer.findById(id, function(err, customer){
        if(err){
            res.status(500).json({
                message: "Erro ao tentar localizar o usuário"
            });
        } else if(customer == null){
            res.status(400).json({
                message: "usuário não encontrado para o ID informado"
            });
        } else{
            customer.nome = req.body.nome;
            customer.email = req.body.email;
            customer.password = req.body.password;

            customer.save(function(err){
                if(err)
                    res.send(`Erro ao tentar atualizar o usuário, ${err}`);
                res.status(200).json({
                    message: "usuário atualizado com sucesso"
                });
            });
        }
    });
}

//DELETE
exports.delete = function(req, res){
    Customer.findByIdAndRemove(req.params.customerId, (err, customer) => {
        if(err)
            res.status(500).send(`Erro ao deletar, ${err}`);
        var response = {
            message: "usuário removido com sucesso",
            id: customer.id
        };
        return res.status(200).send(response);
    });
}