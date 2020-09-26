//Importando os pacotes
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    nome: String,
    descricao: String,
    //produto :{
       // type:mongoose.Schema.Types.ObjectId,
       // ref:'Product'
   // }
});

module.exports = mongoose.model("Category", categorySchema);