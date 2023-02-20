const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const empRoutes = require('./router/empdata')
const Data = require("./connection").con

app.use(bodyparser.json());

app.use('/',empRoutes);

app.listen(3000, () => 
console.log('Express server is runnig at port no : 3000')
);


//Get all employees
// app.get('/employees', (req, res) => {
//     Data.query('SELECT * FROM Employee', (err, rows, fields) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// });

// //Insert an employees
// app.post('/employees', (req, res) => {
//     let emp = req.body;
//     var sql = "insert into Employee values(?,?,?,?)";
//     Data.query(sql, [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
//         if (!err)
//             rows.forEach(element => {
//                 if(element.constructor == Array)
//                 res.send('Inserted employee id : '+element[0].EmpID);
//             });
//         else
//             console.log(err);
//     })
// });
