const mysql = require("mysql2");
const dotenv  = require("dotenv")


dotenv.config();




const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATA
})


const query = ( qString , Values) => {
    return new Promise((resolve , reject) => {
        pool.query(qString , Values , (err , results) => {
            if(err) reject(err)
            resolve(results)
        })
    })

}

module.exports = query