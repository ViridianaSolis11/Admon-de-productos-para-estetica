import db from '../database/db.js';

export const createCategory = (req, res) =>{
    const name = req.body.name;

    db.query('INSERT INTO categories (name) VALUES (?)', [name], (err, result) =>{

        if (err){
            console.log(err);
        } else {
            res.send('values inserted successfully');
        }
    });
};

export const getCategories = (req, res) => {
    db.query('SELECT * FROM categories', (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
};

export const getCategory = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM categories WHERE idcategory = ?', id, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
};

export const updateCategory = (req, res) => {
    const idcategory = req.body.idcategory;
    const name = req.body.name;

    db.query('UPDATE categories SET name = ? WHERE idcategory = ?', [name, idcategory],  (err, result) => {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
};

export const deleteCategory = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM categories WHERE idcategory = ?', id, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
};