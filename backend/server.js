const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()
const mysql = require('mysql2')

  
app.use(cors({
    origin: '*'
}))

var conn = mysql.createConnection({
    host: '10.0.0.19',
    user: process.env.DB_USER,
    password: process.env.DBPassword,
    database: "3d_print_exchange",
})

conn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected")
})
  
app.get('/' , (req , res)=>{
    res.send("GeeksforGeeks");
})
  
app.listen(3000 , ()=>{
    console.log("server is running on port 3000");
})