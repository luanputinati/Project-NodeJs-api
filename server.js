//Importando pacotes
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Configurar o body parser e transformar as req em JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Persistência
var connectionString = "mongodb+srv://luanputinati:Lugano78@cluster0.n3ddh.mongodb.net/dbpos?retryWrites=true&w=majority";
mongoose.connect(connectionString, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false});

//Definir porta onde o server vai responder
var port = process.env.PORT || 3000;

//Definindo as rotas
var router = express.Router(); //intercepta todas as rotas
var productRoute = require('./routes/product-route');
var indexRoute = require('./routes/index-route');

//Rota principal
app.use('/api', indexRoute);

//Rota para produto
app.use('/api/produtos/', productRoute);

app.listen(port, () => {
    console.log("Server is up and running", port);
});