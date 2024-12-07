const mysql = require('mysql2');

// Crear una conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ejercicio'
});

// Abrir la conexión
connection.connect((err) => {
    if (err){
        console.error('Error al conectar:', err.stack);
        return;
    }else{
        console.log('Conexión exitosa!');
    }
});

module.exports = connection;