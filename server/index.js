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
    database: 'inventariodb',
});

app.post('/create', (req, res) =>{
    const name = req.body.name;
    const price = req.body.price;
    const stock = req.body.stock;

    db.query('INSERT INTO products (name, price, stock) VALUES (?, ?, ?)', [name, price, stock], (err, result) =>{

        if (err){
            console.log(err);
        } else {
            res.send('values inserted successfully');
        }
    });
});

app.get('/getProducts', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.put('/updateProduct', (req, res) => {
    const idproducts = req.body.idproducts;
    const name = req.body.name;
    const price = req.body.price;
    const stock = req.body.stock;

    db.query('UPDATE products SET name = ?, price = ?, stock = ? WHERE idproducts = ?', [name, price, stock, idproducts],  (err, result) => {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/deleteProduct/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM products WHERE idproducts = ?', id, (err, result) => {
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

