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

app.post('/createCategory', (req, res) =>{
    const name = req.body.name;

    db.query('INSERT INTO categories (name) VALUES (?)', [name], (err, result) =>{

        if (err){
            console.log(err);
        } else {
            res.send('values inserted successfully');
        }
    });
});

app.get('/getCategories', (req, res) => {
    db.query('SELECT * FROM categories', (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.put('/updateCategory', (req, res) => {
    const idcategory = req.body.idcategory;
    const name = req.body.name;

    db.query('UPDATE categories SET name = ? WHERE idcategory = ?', [name, idcategory],  (err, result) => {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/deleteCategory/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM categories WHERE idcategory = ?', id, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.post('/createBrand', (req, res) =>{
    const name = req.body.name;

    db.query('INSERT INTO brands (name) VALUES (?)', [name], (err, result) =>{

        if (err){
            console.log(err);
        } else {
            res.send('values inserted successfully');
        }
    });
});

app.get('/getBrands', (req, res) => {
    db.query('SELECT * FROM brands', (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.put('/updateBrands', (req, res) => {
    const idbrand = req.body.idbrand;
    const name = req.body.name;

    db.query('UPDATE brands SET name = ? WHERE idbrand = ?', [name, idbrand],  (err, result) => {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/deleteBrand/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM brands WHERE idbrand = ?', id, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.post('/createProduct', (req, res) =>{
    const name = req.body.name;
    const price = req.body.price;
    const stock = req.body.stock;
    const category = req.body.category;
    const brand = req.body.brand;

    db.query('INSERT INTO products (name, price, stock, idcategory, idbrand) VALUES (?, ?, ?, ?, ?)', [name, price, stock, category, brand], (err, result) =>{

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
    const category = req.body.category;
    const brand = req.body.brand;

    db.query('UPDATE products SET name = ?, price = ?, stock = ?, idcategory = ?, idbrand = ? WHERE idproducts = ?', [name, price, stock, category, brand, idproducts],  (err, result) => {
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

