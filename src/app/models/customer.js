//Importando pacotes
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    nome : String,
    email : String,
    password : String,
})

module.exports = mongoose.model('Customer', customerSchema);