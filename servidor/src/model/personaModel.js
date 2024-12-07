const connection = require('../config/db');

const obtenerPersonas = (callback) => {
    connection.query('SELECT * FROM personas', (error, results) => {
        if (error){
            console.error(error);            
            callback(error, null);
        }else{
            callback(null, results);
        }
    });
};

const registrarPersona = (nombre, apellido, email, telefono, callback) => {
    connection.query(`INSERT INTO personas(nombre, apellido, email, telefono)
        VALUES('${nombre}', '${apellido}', '${email}', '${telefono}')`, (error, results) => {
        if (error){
            console.error(error);            
            callback(error, null);
        }else{
            callback(null, results);
        }
    });
};

module.exports = {
    obtenerPersonas,
    registrarPersona
}