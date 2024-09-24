const data = {};
data.employees = require('../model/employees.json');

const getAllEmployees = (req, res) => {
    res.json(data.employees)
}