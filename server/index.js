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

app.post('/createItemTicket', (req, res) =>{
    const id = null;
    const id_prod = req.body.id_prod;
    const id_itemticket = req.body.id_itemticket;
    const quantity = req.body.quantity;

    db.query('INSERT INTO item_ticket VALUES (?,?,?,?)', [id,id_prod,id_itemticket,quantity], (err, result) =>{

        if (err){
            console.log(err);
        } else {
            res.send('values inserted successfully');
        }
    });
});

app.get('/getItemTicket', (req, res) => {
    db.query('SELECT * FROM item_ticket', (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.put('/updateItemTicket', (req, res) => {
    const id = null;
    const id_prod = req.body.id_prod;
    const id_itemticket = req.body.id_itemticket;
    const quantity = req.body.quantity;

    db.query('UPDATE item_ticket SET idprod = ?, id_itemticket = ?, quantity = ? WHERE iditem_ticket = ?', [id_prod, id_itemticket, quantity, id],  (err, result) => {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/deleteItemTicket/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM item_ticket WHERE iditem_ticket = ?', id, (err, result) => {
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

