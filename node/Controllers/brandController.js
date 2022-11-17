import db from '../database/db.js';

export const createBrand = (req, res) =>{
    const name = req.body.name;

    db.query('INSERT INTO brands (name) VALUES (?)', [name], (err, result) =>{
        if (err){
            console.log(err);
        } else {
            res.send('values inserted successfully');
        }
    });
};

export const getBrands = (req, res) => {
    db.query('SELECT * FROM brands', (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
};

export const updateBrand = (req, res) => {
    const idbrand = req.body.idbrand;
    const name = req.body.name;

    db.query('UPDATE brands SET name = ? WHERE idbrand = ?', [name, idbrand],  (err, result) => {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
};

export const deleteBrand = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM brands WHERE idbrand = ?', id, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
};