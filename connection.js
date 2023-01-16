const mysql = require('mysql');

// var mysqlConnection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "admin",
//     database: "edureka",
//     multipleStatements: true
// })
var mysqlConnection = mysql.createConnection({
    server: "containers-us-west-89.railway.app",
    user: "root",
    password: "nzAk67ECMmAmg4VEErkS",
    database: "railway",
    multipleStatements: true
})

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Database connceted succesfully")
    }
})


module.exports= mysqlConnection;