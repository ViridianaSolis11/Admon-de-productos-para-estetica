import db from '../database/db.js';

export const getClients = (req, res) => {

    db.query('SELECT * FROM clients', (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
    // res.send("HOLAAAAAAAAA");
}

