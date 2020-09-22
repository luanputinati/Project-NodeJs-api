//Importando pacotes
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtoSchema = new Schema({
    nome : String,
    preco : Number,
    descricao : String,
    categoria : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required: true
    }
});

module.exports = mongoose.model('Produto', produtoSchema);