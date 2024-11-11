/*
* Conexión a MySQL
 */

import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'm15126376',
    database: 'todos',
    port: 4100,
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connectado!');
});
export default connection;

