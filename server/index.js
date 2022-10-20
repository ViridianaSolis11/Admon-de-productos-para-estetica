const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'inventariodb_test',
});

app.post('/createClient', (req, res) =>{
    const name = req.body.name;
    const firstname = req.body.firstname;
    const phone = req.body.phone;
    const debt = req.body.debt;

    db.query('INSERT INTO clients (name, firstname, phone, debt) VALUES (?,?,?,?)', [name, firstname, phone, debt], (err, result) =>{

        if (err){
            console.log(err);
        } else {
            res.send('values inserted successfully');
        }
    });
});

app.get('/getClients', (req, res) => {
    db.query('SELECT * FROM clients', (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.put('/updateClient', (req, res) => {
    const idclient = req.body.idclient;
    const name = req.body.name;
    const firstname = req.body.firstname;
    const phone = req.body.phone;
    const debt = req.body.debt;

    db.query('UPDATE clients SET name = ?, firstname = ?, phone = ?, debt = ? WHERE idclient = ?', [name, firstname, phone, debt, idclient],  (err, result) => {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/deleteClient/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM clients WHERE idclient = ?', id, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("your server is running on port 3001")
});

