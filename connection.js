const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "edureka",
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