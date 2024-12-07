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

module.exports = {
    obtenerPersonas
}