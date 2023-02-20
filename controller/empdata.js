const Data = require('../connection').con

//Get all employees
const getAllData = async (req, res, next) => {
    Data.query('SELECT * FROM Employee', (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.json({ data: rows, message: "Record found successfully!!!!" });
        }
        else
            res.json({ message: "Record doed not found!!!!" });
    })
};

//Insert an employees
const postData = async (req, res, next) => {
    let emp = req.body;
    var sql = "insert into Employee values(?,?,?,?)";
    Data.query(sql, [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
        if (!err)
            res.json("Record inserted successfully!!!!");
        else
            console.log(err);
    })
};

//get an employees
const getDataById = async (req, res, next) => {
    let EmpID = req.params.id;
    var sql = 'select * from employee where empid=?';
    Data.query(sql, [EmpID], (err, rows, fields) => {
        if (!err) {
            if (rows.length > 0) {
                res.json({ data: rows, message: "Record found successfully!!!!" });
            } else {
                res.json({ message: "Record doed not found!!!!" });
            }
        }
        else {
            res.json({ message: "Record doed not found!!!!" });
        }

    })
};

//update an employees
const updateDataById = async (req, res, next) => {
    const empid = req.params.id
    let emp = req.body;
    const data = "select empid from employee where empid =?"
    Data.query(data, [empid], (err, rows, fields) => {
        if (rows.length > 0) {
            var sql = "update employee set name=?,empcode=?,salary=? where empid=?";
            Data.query(sql, [emp.Name, emp.EmpCode, emp.Salary, empid], (err, rows, fields) => {
                if (!err) {
                    res.json({ message: "Record updated successfully!!!!" });
                } else {
                    res.json({ message: err });
                }
            })
        }
        else {
            res.json({ message: "Record doed not exist!!!!" });
        }
    })
};
//delete an employees
const deleteDataById = async (req, res, next) => {
    const empid = req.params.id
    const data = "select empid from employee where empid =?"
    Data.query(data, [empid], (err, rows, fields) => {
        if (rows.length > 0) {
            var sql = "delete from employee where empid=? ";
            Data.query(sql, [empid], (err, rows, fields) => {
                if (!err) {
                    res.json({ message: "Record deletd successfully!!!!" });
                } else {
                    res.json({ message: err });
                }
            });
        }
        else
            res.json("Record does not exist!!!!");
    })
};


module.exports = { postData, getAllData, getDataById, updateDataById, deleteDataById };