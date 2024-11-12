/*
* Conexión a MySQL
 */
import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

const host = process.env.DATA_BASE_HOST
const user = process.env.DATA_BASE_USER
const password = process.env.DATA_BASE_PASSWORD
const database = process.env.DATA_BASE_NAME
const port = process.env.DATA_BASE_PORT

const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: port,
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connectado!');
});
export default connection;

