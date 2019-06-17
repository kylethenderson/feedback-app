const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

app.get('/feedback', (req, res) => {
    pool.query(`SELECT * FROM "feedback" ORDER BY "id";`)   // request all data from the db
        .then(result => {
            res.send(result.rows);  // send back the resulting array
        })
        .catch( error => {
            console.log(error)
            res.sendStatus(500);    //send error on error
        })
})

app.post('/feedback', (req, res) => {
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]) // post to the db
        .then( result => {
            res.sendStatus(200);    // send ok on success
        })
        .catch( error => {
            console.log(error);
            res.sendStatus(500);    // send error on error
        });
})

app.put('/feedback', (req, res) => {
    pool.query(`UPDATE "feedback" SET "flagged" = $1        
    WHERE "id" = $2;`, [!req.body.flagged, req.body.id])    // update the flagged column of a table row
        .then( result => {
            res.sendStatus(200);    // send ok on success
        })
        .catch( error => {
            console.log(error);
            res.sendState(500); // send error on error
        })
})

app.delete('/feedback/:id', (req, res) => {
    pool.query(`DELETE FROM "feedback" WHERE "id" = $1;`, [req.params.id])  // delete row from db based on id from client
        .then( result => {
            res.sendStatus(200);    // send ok on success
        }).catch( error => {
            console.log(error);
            res.sendStatus(500);    // send error on error
        });
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});