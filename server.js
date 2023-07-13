const mysql = require('mysql');
const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notes')

var app = express();
app.set("subdomain offset", 1);

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/notes', notesRoutes)
// app.use(subdomain('/notes', notesRoutes))


app.use('/', (req, res) => {
    console.log("main called")
    res.send('This is my first api')
})


const PORT = 3000;
app.listen(process.env.PORT || PORT, () => {
    console.log('Server Started')
})