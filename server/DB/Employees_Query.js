
const query = require("./index.js");



const getAll = async () => {
  return await query("SELECT * FROM employees;");
};

const getOne = async (id) => {
  return await query("SELECT * FROM employees WHERE id = ? ;" , [id]);
};

const createOne = async (employeeDetails) => {
  return await query("INSERT INTO employees SET ? ;" , [employeeDetails]);
};

const deleteOne = async (id) => {
  return await query("DELETE FROM employees WHERE id = ? ;" , [id]);
};

const updateOne = async (id , employeeDetails) => {
    return await query("UPDATE employees SET ? WHERE id = ?;", [employeeDetails , id]);
  };
  






module.exports = {
    getAll,
    getOne,
    createOne,
    deleteOne,
    updateOne
}