var Produto = require('../app/models/product');


//POST
exports.post = async(data) => {
    var produto = new Produto(data);
    await produto.save();
}

//GET ALL
exports.getAll = async() => {
    var res = await Produto.find();
    return res;
}

//GET BY ID
exports.getById = async(id) => {
    var res = await Produto.findById(id);
    return res;
}

//PUT
exports.put = async(id, data) => {
    await Produto.findByIdAndUpdate(id, {
        $set:{
            nome: data.nome,
            preco: data.preco,
            descricao: data.descricao
        }
    });
}

//DELETE
exports.delete = async(id) => {
    await Produto.findByIdAndDelete(id);
}