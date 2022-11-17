import mysql from 'mysql';

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'inventariodb_test',
});

export default(db);
