const mysql = require('mysql');
const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notes')

var app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/notes', notesRoutes)



app.listen(process.env.PORT || 3000, () => {
    console.log('Server Started')
})