const e = require('express');
const express = require('express')
const router = express.Router();
const mysqlConnection = require('../connection')

router.get('/', (req, res) => {
    console.log('Called')
    mysqlConnection.query("SELECT * from notes", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    }) 
})

router.post('/', (req, res) => {
    var note = req.body.note;
    if (req.body && req.body.note) {
        mysqlConnection.query(`INSERT INTO notes ( notes) VALUES ('${note}')`, (err, rows, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(404);
                res.end;

            } else {
                console.log('added ' + req.body.note);
                res.sendStatus(200)
                res.end;
            }
        })
    } else {
        res.sendStatus(204);
        res.end;
    }

    res.end;
})


router.put('/update/:id/:note', (req, res) => {
    console.log("Called")

    var id = req.params.id;
    var note = req.params.note;

    mysqlConnection.query(`UPDATE notes SET notes = '${note}' WHERE id = '${id}'`, (err, row, fields) => {
        if (!err) {
            console.log("Changed")
            res.sendStatus(200)
            res.end;
        } else {
            console.log(err)
            res.sendStatus(404);
            res.end;
        }
    })
})

router.delete('/delete/:id', (req, res) => { 
    var id = req.params.id;

    mysqlConnection.query(`DELETE from notes WHERE id = '${id}'`, (err, row, fields) => {
        if (!err) {
            console.log("Deleted Succesfully")
            res.sendStatus(200)
            res.end;
        } else {
            console.log(err)
            res.sendStatus(404);
            res.end;
        }
    })
})

module.exports = router;