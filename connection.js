const mysql = require("mysql")
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kaushik@136",
    database: "testdb"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connection created..!!");
});

module.exports.con = con;

