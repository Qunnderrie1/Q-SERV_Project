const express = require("express");
const db = require("../DB/Employees_Query.js")



const router = express.Router();



// Get All Employees
 router.get("/" , async (req , res, next) => {

    console.log(req.body)

    let employee;

    try {

        employee = await db.getAll()
        res.json(employee)

    } catch (error) {
        next(error)
    }

})



// Get All Employees by ID
router.get("/employee/:id" , async (req , res , next) => {
    const  { id } = req.params;

    let employeeId;

    try {

        employeeId = await db.getOne(id)
        res.json(employeeId)
        
    } catch (error) {
        next(error)
    }




})


// Add New Employee
router.post("/" , async (req , res, next) => {

    let employeeDetails = req.body;

    try {

        employeeDetails = await db.createOne(employeeDetails)
        console.log("Employye has been added")
        
    } catch (error) {
        next(error)
    }

    console.log(employeeDetails)
 


})



// Update Employee
router.put("/employee/:id" , async (req , res, next) => {

    const { id } = req.params;
    let employeeDetails = req.body;
    let employee;

    try {

        employee = await db.updateOne(id , employeeDetails)
        console.log(`Update Employee: ${id}`)
        
    } catch (error) {
        next(error)
    }
    console.log(req.body)

    console.log("Employee:" + id)


})




// Delete Employee

router.delete("/employee/:id" , async (req , res, next) => {

    const { id  } = req.params;

    let employee;

    try {

        employee = await db.deleteOne(id)
        res.redirect("/search/employee")

    } catch (error) {
        next(error)
    }

})



module.exports = router