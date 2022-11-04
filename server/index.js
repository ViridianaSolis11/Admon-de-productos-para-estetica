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

app.post('/createAbonos', (req, res) =>{
    const id = null;
    const id_ticket = req.body.id_ticket;
    const amount_payed = req.body.amount_payed;

    db.query('INSERT INTO abonos VALUES (?,?,?)', [id,id_ticket, amount_payed], (err, result) =>{

        if (err){
            console.log(err);
        } else {
            res.send('values inserted successfully');
        }
    });
});

app.get('/getAbonos', (req, res) => {
    db.query('SELECT * FROM abonos', (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.put('/updateAbonos', (req, res) => {
    const id = req.body.idabonos;
    const id_ticket = req.body.id_ticket;
    const amount_payed = req.body.amount_payed;

    db.query('UPDATE abonos SET id_ticket = ?, amount_payed = ? WHERE idabonos = ?', [id_ticket, amount_payed, id],  (err, result) => {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/deleteAbonos/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM abonos WHERE idabonos = ?', id, (err, result) => {
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

