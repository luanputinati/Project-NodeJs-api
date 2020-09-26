var Customer = require('../app/models/customer');


//POST
exports.post = async(data) => {
    var customer = new Customer(data);
    await customer.save();
}

//GET ALL
exports.getAll = async() => {
    var res = await Customer.find();
    return res;
}

//GET BY ID
exports.getById = async(id) => {
    var res = await Customer.findById(id);
    return res;
}

//PUT
exports.put = async(id, data) => {
    await Customer.findByIdAndUpdate(id, {
        $set:{
            nome: data.nome,
            preco: data.email,
            descricao: data.password
        }
    });
}

//DELETE
exports.delete = async(id) => {
    await Customer.findByIdAndDelete(id);
}