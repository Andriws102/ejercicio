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
};

const registrarPersona = (req, res) => { 
    const {nombre,apellido,email,telefono} = req.body;
    personaModel.registrarPersona(nombre,apellido,email,telefono, (err, result) => {
        if(err){
            res.status(500).json({
                error: err
            });
        }else{
            res.json(result);
        }
    });
};

module.exports = {
    obtenerPersonas,
    registrarPersona
}