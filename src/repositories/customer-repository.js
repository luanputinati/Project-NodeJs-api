var Customer = require('../app/models/customer');



exports.register = async(name, email, pass) =>{
    var result = await Customer.find({email: email});

    if(result.length > 0){
        throw{
            status: 400,
            message: "Usuário já existente"
        };
    }

    var customer = new Customer();
    customer.name = name;
    customer.email = email;
    customer.password = customer.generateHash(pass);

    customer.save((err, res) =>{

        if(err){
            return {
                success: false,
                message: "Erro ao salvar"
            };
        }
    });
    return {customer: customer};
}

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
            email: data.email,
            password: data.password
        }
    });
}

//DELETE
exports.delete = async(id) => {
    await Customer.findByIdAndDelete(id);
}