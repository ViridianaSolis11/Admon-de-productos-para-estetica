import db from '../database/db.js';

export const createProduct = (req, res) =>{
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
};

export const getProducts = (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
};

export const updateProduct = (req, res) => {
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
};

export const deleteProduct = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM products WHERE idproducts = ?', id, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
};