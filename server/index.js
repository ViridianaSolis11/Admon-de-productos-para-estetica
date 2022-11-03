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

app.post('/createTickets', (req, res) =>{
    const id = 3; // ESTO NO SUPIMOS COMO SALVARLO
    const id_client = req.body.id_client;
    const total_cost = req.body.total_cost;
    const payed = req.body.payed;

    db.query('INSERT INTO tickets (idTicket, id_client, total_cost, payed) VALUES (?,?,?)', [id,id_client, total_cost, payed], (err, result) =>{

        if (err){
            console.log(err);
        } else {
            res.send('values inserted successfully');
        }
    });
});

app.get('/getTickets', (req, res) => {
    db.query('SELECT * FROM tickets', (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.put('/updateTickets', (req, res) => {
    const idTicket = req.body.idTicket;
    const id_client = req.body.id_client;
    const total_cost = req.body.total_cost;
    const payed = req.body.payed;

    db.query('UPDATE tickets SET id_client = ?, total_cost = ?, payed = ? WHERE idTicket = ?', [id_client, total_cost, payed, idTicket],  (err, result) => {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/deleteTickets/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM tickets WHERE idTicket = ?', id, (err, result) => {
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

