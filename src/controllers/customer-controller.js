var repository = require('../repositories/customer-repository');

//Rotas para produto
//POST
exports.post = async (req, res) => {

    try{
        await repository.post({
            nome: req.body.nome,
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).send({
            message: 'Usuário cadastrado com sucesso.'
        });
        
    } catch(error){
        console.log(error);
        res.status(500).send({
            message: 'Falha ao processar requisição.'
        });
    }
}

//GET ALL
exports.getAll = async(req, res) => {

    try{
        var data = await repository.getAll();
        res.status(200).send(data);

    } catch(error){
        res.status(500).send({
            message: "Falha ao processar requisição.",
            erro: error
        });
    }
}

//GET by ID
exports.getById = async(req, res) => {

    try{
        var id = req.params.productId;
        var data = await repository.getById(id);
        res.status(200).send(data);

    } catch (error){
        res.status(500).send({
            message: "Falha ao processar requisição.",
            erro: error
        });
    }
}

//PUT
exports.put = async(req, res) => {
    
    try{
        var id = req.params.customerId;
        var data = await repository.put(id, req.body);
        res.status(200).send({
            message: "Usuário atualizado com sucesso.",
            dados: data
        });

    } catch(error){
        res.status(500).send({
            message: "Falha ao processar requisição.",
            erro: error
        });
    }
}

//DELETE
exports.delete = async(req, res) => {
    try{
        var id = req.params.customerId;
        await repository.delete(id);
        res.status(200).send({
            message: "Usuário removido com sucesso."
        });

    } catch(error){
        res.status(500).send({
            message: "Falha ao processar requisição.",
            erro: error
        });
    }
}