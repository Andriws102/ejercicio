const personaModel = require('../model/personaModel');

const obtenerPersonas = (req, res) => {
    personaModel.obtenerPersonas((err, result) => {
        if(err){
            res.status(500).json({
                error: err
            });
        }else{
            res.json(result);
        }
    });
}

module.exports = {
    obtenerPersonas
}