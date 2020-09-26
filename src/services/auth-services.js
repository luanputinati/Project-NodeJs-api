var jwt = require('jsonwebtoken');

exports.generateToken = async(data) => {
    return jwt.sign(data, global.SALT_KEY, {experesIn: "1d"});
}

exports.decodeToken = async(token) =>{
    var data = await jwt.verify(token, global.SALT_KEY);
    return data
}

// Função de Middleware
exports.authorize = async(req, res, next) => {
    //buscar o token no body, na query ou header
    var token = req.body.token || req.query.token || req.headers["x-acces-token"];

    //Verificação se encontrou o token
    if(!token){
        res.status(401).json({
            message: "Acesso restrito"
        });
    } else{
        //Se encontrou o token, verificar
        jwt.verify(token, global.SALT_KEY, function(error, decode){
            if(error){
                res.status(401).json({
                    message: "Token inválido",
                    error: error
                });
            } else{
                //Token válido.
                next();
            }
        });
    }
}