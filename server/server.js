const express = require("express");
const cors = require("cors")
const EmployeeRoute = require("./Routes/EmployyeesRoute.js")




const app = express();


app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/" , EmployeeRoute)



app.listen(3001 , () => {
    console.log("Server is runninig on port 3001")
})